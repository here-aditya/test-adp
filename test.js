const getchAPI = async () => {
  try {
    const response = await fetch('https://interview.adpeai.com/api/v2/get-task');
    const apidata = await response.json();
    console.log(apidata);
    return apidata
  } catch (err) {
    console.log(err.message);
  }
};

// Error : "NetworkError when attempting to fetch resource."
// resp = getchAPI()

const resp = [
  {
    "transactionID": "TX_691",
    "timeStamp": "2023-05-25T17:35:19.460Z",
    "amount": 1000,
    "type": "alpha",
    "location": {
      "name": "New York, New York",
      "id": "L027145"
    },
    "employee": {
      "name": "Abram W Choi",
      "id": "SED133",
      "categoryCode": "red"
    }
  },
  {
    "transactionID": "TX_691",
    "timeStamp": "2023-05-25T17:35:19.460Z",
    "amount": 2000,
    "type": "alpha",
    "location": {
      "name": "New York, New York",
      "id": "L027145"
    },
    "employee": {
      "name": "Abram W Choi",
      "id": "SED133",
      "categoryCode": "red"
    }
  }
  ]
const getTopEarner = (resp) => {
  const empObj = {}
  resp.forEach(obj => {
    const objYear = new Date(obj.timeStamp).getFullYear()
    const curYear = new Date().getFullYear()
    
    if(curYear - 1 === objYear) {
      total = empObj[obj.employee.id] === undefined ? obj.amount : empObj[obj.employee.id] + obj.amount
      empObj[obj.employee.id] = total
    }
  })
  
  getMaxEmpSal = {}
  for([empId, empSal] of Object.entries(empObj)) {
    if(getMaxEmpSal.id === undefined) {
      getMaxEmpSal= {id: empId, val: empSal}
    } else if(empSal > getMaxEmpSal.val) {
      getMaxEmpSal= {id: empId, val: empSal}
    }
  }
  
  console.log(getMaxEmpSal)
}

getTopEarner(resp)
