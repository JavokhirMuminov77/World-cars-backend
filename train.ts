// function reduceNestedArray(arr: any[]): number {
//   let total: number = 0;
//   for (const element of arr) {
//       if (Array.isArray(element)) {
//           total += reduceNestedArray(element);
//       } else if (typeof element === 'number') {
//           total += element;
//       }
//   }
//   return total;
// }
// console.log("Train");
// // Misol uchun:
// console.log(reduceNestedArray([1, [1, 2, [4]]]));



// function reduceNestedArray(arr: (number | any)[]): number {
// 	return arr.reduce((acc, curr) => {
// 		if (typeof curr === 'number') {
// 			return acc + curr;
// 		} else if (Array.isArray(curr)) {
// 			return acc + reduceNestedArray(curr);
// 		} else {
// 			return acc;
// 		}
// 	}, 0);
// }

// console.log("Train =>",reduceNestedArray([1, [1, 2, [4]]]));


// ZK-TASK:

function printNumbers() {
	
	const interval = setInterval(() => {
		for (let i = 1; i <= 5; i++) {
			console.log(i);
		}
	}, 1000);
	setTimeout(() => {
		clearTimeout(interval);
	}, 5000);
}

printNumbers();