function req() {
    fetch('https://dummyjson.com/products/1')
        .then(res => res.json())
        .then(json => {
            let expected =  "iPhone 8";
            if(json.title == expected) {
                console.log("PASSED")
            } else {
                console.log("FAILED: expected ",expected, " but was ",  json.title);
            }
        });
        
    console.log("............................")
}
req()