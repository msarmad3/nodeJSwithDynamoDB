var AWS = require('aws-sdk');
var config = {
  "apiVersion": "2012-08-10",
  "accessKeyId": "pvqn6",
  "secretAccessKey": "euvolo",
  "region":"us-east-1",
  "endpoint": "http://localhost:8000"
}
var dynamodb = new AWS.DynamoDB(config);
// var params = {
//     AttributeDefinitions: [
//       {
//         AttributeName: 'CUSTOMER_ID',
//         AttributeType: 'N'
//       },
//       {
//         AttributeName: 'CUSTOMER_NAME',
//         AttributeType: 'S'
//       }
//     ],
//     KeySchema: [
//       {
//         AttributeName: 'CUSTOMER_ID',
//         KeyType: 'HASH'
//       },
//       {
//         AttributeName: 'CUSTOMER_NAME',
//         KeyType: 'RANGE'
//       }
//     ],
//     ProvisionedThroughput: {
//       ReadCapacityUnits: 1,
//       WriteCapacityUnits: 1
//     },
//     TableName: 'CUSTOMER_LIST',
//     StreamSpecification: {
//       StreamEnabled: false
//     }
//   };
//   dynamodb.createTable(params, function(err, data) {
//     if (err) {
//       console.log("Error", err);
//     } else {
//       console.log("Table Created", data);
//     }
//   });

// var params = {
//   TableName: 'CUSTOMER_LIST',
//   Item: {
//     'CUSTOMER_ID' : {N: '003'},
//     'CUSTOMER_NAME' : {S: 'Mohammad Sarmad'},
//     'Order_no' : {N: '009'}
//   }
// };

// // Call DynamoDB to add the item to the table
// dynamodb.putItem(params, function(err, data) {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log("Success", data);
//   }
// });

//  var params = {
//   TableName: 'CUSTOMER_LIST',
//   Key: {
//     'CUSTOMER_ID': {N: '003'},
//     'CUSTOMER_NAME': {S: 'Mohammad Sarmad'}
//   },
  
//   "UpdateExpression": "SET #07290 = :07290",
//   "ExpressionAttributeValues": {
//     ":07290": {
//       "N": "065"
//     }
//   },
//   "ExpressionAttributeNames": {
//     "#07290": "Order_no"
//   },
//     ReturnValues: "ALL_NEW",
// };

// // Call DynamoDB to read the item from the table
// dynamodb.updateItem(params, function(err, data) {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log("Success", data.Item);
//   }
// });

/* This example adds three new items to the Music table using a batch of three PutItem requests. */

// var params = {
//   RequestItems: {
//    "CUSTOMER_LIST": [
//        {
//       PutRequest: {
//         Item: {
//           'CUSTOMER_ID' : {N: '0038'},
//           'CUSTOMER_NAME' : {S: 'ALI Khan'}
//         }
//       }
//      }, 
//        {
//       PutRequest: {
//         Item: {
//           'CUSTOMER_ID' : {N: '003423'},
//           'CUSTOMER_NAME' : {S: 'Sabhaun Jan'}
//         }
//       }
//      }, 
//        {
//       PutRequest: {
//         Item: {
//           'CUSTOMER_ID' : {N: '00583'},
//           'CUSTOMER_NAME' : {S: 'Aamir khan'}
//         }
//       }
//      }
//     ]
//   }
//  };
//  dynamodb.batchWriteItem(params, function(err, data) {
//    if (err) console.log(err, err.stack); // an error occurred
//    else     console.log(data);           // successful response
//    /*
//    data = {
//    }
//    */
//  });


var params = {
  TableName: 'CUSTOMER_LIST',
  Key: {
    'CUSTOMER_ID': {N: '003'},
    'CUSTOMER_NAME' : {S: 'Mohammad Sarmad'}

  },
  
};

// Call DynamoDB to read the item from the table
dynamodb.getItem(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.Item);
  }
});