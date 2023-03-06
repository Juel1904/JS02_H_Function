function isLeapYear(n){
    if(n%100==0){
        if(n%400==0){
            console.log("Năm "+n+" là năm nhuận");
        }
    } else if(n%4==0){
        console.log("Năm "+n+" là năm nhuận")
    }
    else{
        console.log("Năm "+n+" không phải là năm nhuận")
    }
}
isLeapYear(2000)
isLeapYear(2024)
isLeapYear(2023)
isLeapYear(2400)