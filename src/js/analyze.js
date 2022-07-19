document.querySelector("#read-button").addEventListener('click', function(){
    // no file selected to read
    if(document.querySelector('#file').value == ''){
        alert("No file selected");
        return;
    }

    // get file object
    const file = document.querySelector('#file').files[0];
    const reader = new FileReader();

    // event handler
    reader.onload = function(e){
        let buffer = e.target.result;
        const contentDec = new Uint8Array(buffer);
        let contentHex = [];

        // 16진수로 변환
        let index = 0;
        while(index < contentDec.length){
            contentHex.push(contentDec[index].toString(16).toUpperCase());
            index += 1;
        }

        // MBR Signature 검증
        let selector = document.querySelector("#signature");
        if(['55','AA'] == contentHex.slice(510,512).toString()){
            selector.value="정상";
        }else{
            selector.value="손상";
        }

        // partition analyze
        partitionAnalyze(contentHex, 1);
        partitionAnalyze(contentHex, 2);
        partitionAnalyze(contentHex, 3);
        partitionAnalyze(contentHex, 4);
        
    }
    reader.onerror = function(e) {
		// error occurred
		alert('Error : ' + e.type);
	};

    // read file
	reader.readAsArrayBuffer(file);
})

function partitionAnalyze(content, partNumber){
    const baseOffset = 446;
    const startIndex = baseOffset + 16 * (partNumber - 1);
    let partition = content.slice(startIndex,startIndex+16);

    // hex formatting
    index = 0;
    while(index < partition.length){
        if(partition[index] == ["0"].toString()){
            partition[index] = "00";
        }else if(partition[index].length == 1){
            partition[index] = "0" + partition[index];
        }

        index += 1;
    }

    const bootFlag = document.querySelectorAll("input[name='boot-flag']")[partNumber-1];
    const startingChs = document.querySelectorAll("input[name='starting-chs']")[partNumber-1];
    const partType = document.querySelectorAll("input[name='partition-type']")[partNumber-1];
    const endingChs = document.querySelectorAll("input[name='ending-chs']")[partNumber-1];
    const lba = document.querySelectorAll("input[name='lba']")[partNumber-1];
    const sizeSector = document.querySelectorAll("input[name='size-sector']")[partNumber-1];

    
    if(partition.slice(0,1) == ["80"].toString()){
        bootFlag.value = "부팅 가능"
    }else{
        bootFlag.value = "부팅 불가능"
    }
    
    startingChs.value = "0x" + partition.slice(1,4).reverse().join('');

    if(partition.slice(4,5) == ["0"].toString()){
        partType.value = "Empty";
    }else if(partition.slice(4,5) == ["7"].toString()){
        partType.value = "FAT or NTFS";
    }else{
        partType.value = "else";
    }

    endingChs.value = "0x" + partition.slice(5,8).reverse().join('');

    lba.value = "0x" + partition.slice(8,12).reverse().join('');

    sizeSector.value = "0x" + partition.slice(12,16).reverse().join('');
}
