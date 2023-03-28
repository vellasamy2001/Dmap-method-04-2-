         //sum-4-(2) findindex method//
						  const employeesname = [
						 { name: "David Carlson", age: 30 },
						 { name: "John Cena", age: 34 },
						 { name: "Mike Sheridan", age: 25 },
						 { name: "John Carte", age: 50 }
						];
						const index = employeesname.findIndex(function (employee) {
						  return employee.name.indexOf('John') > -1;
						});

						console.log(index);