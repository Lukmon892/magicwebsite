// const delivery = {
//     "id": "f9f363d1-e1c2-4595-b477-c649845bc953",
//     "display_id": "BC953",
//     "external_reference_id": "Order-123",
//     "current_state": "CREATED",
//     "store": {
//       "id": "c7f1dc2f-fabe-4997-845c-cad26fdcb894",
//       "name": "Harry's Hamburgers",
//       "external_reference_id": "HARRY_123"
//     },
//     "eater": {
//       "id": "63578c8b-9cd2-4c4f-91fc-315f575e6a78",
//       "first_name": "Larry",
//       "phone": "+1 555-555-5555",
//       "phone_code": "555 55 555"
//     },
//     "eaters": [
//       {
//         "id": "63578c8b-9cd2-4c4f-91fc-315f575e6a78",
//         "first_name": "Larry",
//         "phone": "+1 555-555-5555",
//         "phone_code": "555 55 555"
//       }
//     ],
//     "cart": {
//       "items": [
//         {
//           "id": "Muffin",
//           "instance_id": "Muffin-Instance",
//           "title": "Fresh-baked muffin",
//           "external_data": "External data for muffin",
//           "quantity": 1,
//           "price": {
//             "unit_price": {
//               "amount": 350,
//               "currency_code": "USD",
//               "formatted_amount": "$3.50"
//             },
//             "total_price": {
//               "amount": 350,
//               "currency_code": "USD",
//               "formatted_amount": "$3.50"
//             },
//             "base_unit_price": {
//               "amount": 300,
//               "currency_code": "USD",
//               "formatted_amount": "$3.00"
//             },
//             "base_total_price": {
//               "amount": 300,
//               "currency_code": "USD",
//               "formatted_amount": "$3.00"
//             }
//           },
//           "selected_modifier_groups": [
//             {
//               "id": "Choose-flavor",
//               "title": "Choose flavor",
//               "external_data": "External data for muffin flavor choice",
//               "selected_items": [
//                 {
//                   "id": "Chocolate-deluxe",
//                   "title": "Chocolate deluxe",
//                   "external_data": "External data for chocolate deluxe flavor",
//                   "quantity": 1,
//                   "price": {
//                     "unit_price": {
//                       "amount": 50,
//                       "currency_code": "USD",
//                       "formatted_amount": "$0.50"
//                     },
//                     "total_price": {
//                       "amount": 50,
//                       "currency_code": "USD",
//                       "formatted_amount": "$0.50"
//                     },
//                     "base_unit_price": {
//                       "amount": 50,
//                       "currency_code": "USD",
//                       "formatted_amount": "$0.50"
//                     },
//                     "base_total_price": {
//                       "amount": 50,
//                       "currency_code": "USD",
//                       "formatted_amount": "$0.50"
//                     }
//                   },
//                   "default_quantity": 0
//                 }
//               ],
//               "removed_items": null
//             }
//           ],
//           "eater_id": "63578c8b-9cd2-4c4f-91fc-315f575e6a78"
//         },
//         {
//           "id": "Coffee",
//           "instance_id": "CoffeeInstance",
//           "title": "Coffee",
//           "external_data": "External data for coffee",
//           "special_instructions": "make it iced please",
//           "quantity": 1,
//           "price": {
//             "unit_price": {
//               "amount": 300,
//               "currency_code": "USD",
//               "formatted_amount": "$3.00"
//             },
//             "total_price": {
//               "amount": 300,
//               "currency_code": "USD",
//               "formatted_amount": "$3.00"
//             },
//             "base_unit_price": {
//               "amount": 300,
//               "currency_code": "USD",
//               "formatted_amount": "$3.00"
//             },
//             "base_total_price": {
//               "amount": 300,
//               "currency_code": "USD",
//               "formatted_amount": "$3.00"
//             }
//           },
//           "selected_modifier_groups": [
//             {
//               "id": "Add-milk",
//               "title": "Add milk",
//               "external_data": "External data for milk choice",
//               "selected_items": [
//                 {
//                   "id": "Milk",
//                   "title": "Milk",
//                   "external_data": "External data for milk",
//                   "quantity": 1,
//                   "price": {
//                     "unit_price": {
//                       "amount": 0,
//                       "currency_code": "USD",
//                       "formatted_amount": "$0.00"
//                     },
//                     "total_price": {
//                       "amount": 0,
//                       "currency_code": "USD",
//                       "formatted_amount": "$0.00"
//                     },
//                     "base_unit_price": {
//                       "amount": 0,
//                       "currency_code": "USD",
//                       "formatted_amount": "$0.00"
//                     },
//                     "base_total_price": {
//                       "amount": 0,
//                       "currency_code": "USD",
//                       "formatted_amount": "$0.00"
//                     }
//                   },
//                   "default_quantity": 0
//                 }
//               ],
//               "removed_items": null
//             },
//             {
//               "id": "Add-sugar",
//               "title": "Add sugar",
//               "external_data": "External data for sugar choice",
//               "selected_items": null,
//               "removed_items": [
//                 {
//                   "id": "Sugar",
//                   "title": "Sugar",
//                   "external_data": "External data for sugar",
//                   "quantity": 0,
//                   "price": {
//                     "unit_price": {
//                       "amount": 0,
//                       "currency_code": "USD",
//                       "formatted_amount": "$0.00"
//                     },
//                     "total_price": {
//                       "amount": 0,
//                       "currency_code": "USD",
//                       "formatted_amount": "$0.00"
//                     },
//                     "base_unit_price": {
//                       "amount": 0,
//                       "currency_code": "USD",
//                       "formatted_amount": "$0.00"
//                     },
//                     "base_total_price": {
//                       "amount": 0,
//                       "currency_code": "USD",
//                       "formatted_amount": "$0.00"
//                     }
//                   },
//                   "default_quantity": 2
//                 }
//               ]
//             }
//           ],
//           "eater_id": "63578c8b-9cd2-4c4f-91fc-315f575e6a78"
//         }
//       ],
//       "fulfillment_issues": [
//         {
//           "fulfillment_issue_type": "OUT_OF_ITEM",
//           "fulfillment_action_type": "REMOVE_ITEM",
//           "root_item": {
//             "id": "Muffin",
//             "instance_id": "Muffin-Instance",
//             "title": "Fresh-baked muffin",
//             "external_data": "External data for muffin",
//             "quantity": 1,
//             "fulfillment_action": {
//               "fulfillment_action_type": "REMOVE_ITEM"
//             }
//           },
//           "item_availability_info": {
//             "items_requested": 1,
//             "items_available": 0
//           }
//         },
//         {
//           "fulfillment_issue_type": "PARTIAL_AVAILABILITY",
//           "root_item": {
//             "id": "Coffee",
//             "instance_id": "CoffeeInstance",
//             "title": "Coffee",
//             "external_data": "External data for coffee",
//             "quantity": 1,
//             "fulfillment_action": {
//               "fulfillment_action_type": "REMOVE_ITEM"
//             }
//           },
//           "item_availability_info": {
//             "items_requested": 2,
//             "items_available": 1
//           }
//         }
//       ]
//     },
//     "payment": {
//       "charges": {
//         "total": {
//           "amount": 1399,
//           "currency_code": "USD",
//           "formatted_amount": "$13.99"
//         },
//         "sub_total": {
//           "amount": 650,
//           "currency_code": "USD",
//           "formatted_amount": "$6.50"
//         },
//         "tax": {
//           "amount": 52,
//           "currency_code": "USD",
//           "formatted_amount": "$0.52"
//         },
//         "total_fee": {
//           "amount": 697,
//           "currency_code": "USD",
//           "formatted_amount": "$6.97"
//         }
//       },
//       "accounting": {
//         "taxRemittance": {
//           "tax": {
//             "uber": [
//               {
//                 "value": {
//                   "amount": 53,
//                   "currencyCode": "USD",
//                   "formattedAmount": "$0.53"
//                 }
//               }
//             ],
//             "restaurant": null,
//             "courier": null,
//             "eater": null
//           },
//           "totalFeeTax": null,
//           "deliveryFeeTax": null,
//           "smallOrderFeeTax": null
//         }
//       }
//     },
//     "placed_at": "2019-05-14T15:16:54-05:00",
//     "estimated_ready_for_pickup_at": "2019-05-14T15:36:54-05:00",
//     "type": "DELIVERY_BY_UBER",
//     "brand": "UBER_EATS",
//     "deliveries": [
//       {
//         "id": "65d700da-1e9d-41a7-a304-d0fdcd12b2e4",
//         "first_name": "Bruce",
//         "vehicle": {
//           "make": "Uber",
//           "model": "Bicycle",
//           "license_plate": "BICYCLE"
//         },
//         "picture_url": "https://www.example.com/picture_url",
//         "estimated_pickup_time": "2019-05-14T15:38:45-05:00",
//         "current_state": "ARRIVED_AT_PICKUP"
//       }
//     ]
//   }


//   console.log(delivery.deliveries[0].estimated_pickup_time);

const food =
  {
    "order": {
      "conveyance": {
        "delivery_address_id": null,
        "fulfillment_type": "pickup",
        "desired_ready_time": "2016-02-16T15:00:00Z"
      },
      "delivery_fee_amount": 100,
      "delivery_instructions": null,
      "delivery_uuid": null,
      "discount_amount": 100,
      "instructions": "Pick up your food at the counter.",
      "items": [
        {
          "item": {
            "id": 103,
            "name": "Carne Asada Burrito",
            "option_ids": [525, 527],
            "price_amount": 1000,
            "quantity": 1,
            "selected_options": [
              {
                "option": {
                  "id": 525,
                  "free_quantity": 0,
                  "name": "Flour Tortilla",
                  "price_amount": 0,
                  "quantity": 1
                }
              },
              {
                "option": {
                  "id": 527,
                  "free_quantity": 0,
                  "name": "Green Salsa",
                  "price_amount": 75,
                  "quantity": 2
                }
              }
            ],
            "selected_options_description": "Flour Tortilla, Green Salsa (Quantity: 2)",
            "special_instructions": "Double wrap please.",
            "upsell_id": 52
          }
        }
      ],
      "latitude": 42.3557498,
      "location_id": 1855,
      "location_subtitle": "Boston, MA 02110",
      "location_title": "1 Federal St",
      "longitude": -71.0565637,
      "merchant_name": "LevelUp Cafe",
      "order_number": "1000432",
      "phone": "617-867-5309",
      "provider_service_fee_amount": 20,
      "ready_at": "2015-09-17T15:08:00Z",
      "service_fee_amount": 45,
      "spend_amount": 1195,
      "subtotal": 1150,
      "tax_amount": 45,
      "tip_amount": 0,
      "total_amount": 1240,
      "uuid": "f7943600849501323c1552668b2aa48c"
    }
  }
console.log("items price is: "+ food.order.delivery_fee_amount);