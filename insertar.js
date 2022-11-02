// function insertIntoHeap(heap, val){
//     // tu código va aquí
//     let arr = ['undefined'];
//     arr.push(val)
//     console.log(arr)
//     }
//     // salidas de muestras:
//     insertIntoHeap([], 13);  // altera el array vacío para que sea [undefined, 13]
    function insertIntoHeap(heap, val){
        // tu código va aquí
        let arr = heap;
        arr.push(val);
        let childIndx = arr.length - 1;
        let parentIndx = Math.trunc(childIndx / 2);
        let tempParent = 0;
        while(arr[childIndx] < arr[parentIndx]){
            tempParent = arr[parentIndx];
            arr[parentIndx] = arr[childIndx];
            arr[childIndx] = tempParent;
            childIndx = parentIndx;    
            parentIndx = Math.trunc(childIndx / 2);     
        }
        console.log(arr)
    }
    
insertIntoHeap([undefined, 3, 8, 10, 11, 9, 20, 14], 7); // altera el array a [undefined, 3, 7, 10, 8, 9, 20, 14, 11]