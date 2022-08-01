var dic = {}
const input =
    document.querySelector('input[type="file"]')

input.addEventListener('change', function (e) {
    console.log(input.files)
    const reader = new FileReader()

    reader.onload = function () {
        const lines = reader.result.split('\n').map(function (line) {
           return line.split(',').map((x,idx)=>({[idx]:x}))
        })
        console.log(lines)
    }
    reader.readAsText(input.files[0])
}, false)
