var dic = {}
const input =
    document.querySelector('input[type="file"]')

input.addEventListener('change', function (e) {
    console.log(input.files)
    const reader = new FileReader()

    reader.onload = function () {
        const lines = reader.result.split('\n').map(function (line) {
           return line.split(',').map((x,idx)=>({[idx]:x}))
            // for (ele in myArray) {
            //     dic.push({
            //         key: myArray[0],
            //         value: myArray[1],
            //         value: myArray[2]
            //     })
            //     console.log(dic)
            //} 
        })

        
        console.log(lines) 
    }
    reader.readAsText(input.files[0])
}, false)
