function isPrimeNumber(n){
    for(let i =2; i<n; i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}
//     let check = 0;
//     for(let i=2;i<=n;i++){
//         check = i;
//         if(n%i==0){
//             console.log(n+ " không phải số nguyên tố");
            
//         }
//         break;
//         // else{
//         //     console.log(n+ " là số nguyên tố");
//         // }
        
//     }
//     if (check=n){
//         console.log(n+ " là số nguyên tố");
//     }
// }
// //     let i =2;
// //     while(i<=n){
// //         if(n%i==0){
// //          console.log(n+ "không phải số nguyên tố");
// //          break;
// //         }
// //         i++;
// //     }
    
// // }
console.log(isPrimeNumber(10));
console.log(isPrimeNumber(21));
console.log(isPrimeNumber(17));
// isPrimeNumber(13)