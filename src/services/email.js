var nodemailer = require('nodemailer');

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.sendGridAPIKey)

// const sendEmail = (userData, order) => {
//   console.log(userData, order)
//   var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.senderEmail,
//       pass: process.env.senderPassword
//     }
//   });
//   var mailOptions = {
//     from: process.env.senderEmail,
//     to: 'vandankhamkar1@gmail.com',
//     subject: 'this is test email',
//     html: `<!DOCTYPE html>
//         <html lang="en">

//         <head>
//           <meta charset="UTF-8">
//           <meta http-equiv="X-UA-Compatible" content="IE=edge">
//           <meta name="viewport" content="width=device-width, initial-scale=1.0">
//           <link rel="preconnect" href="https://fonts.googleapis.com">
//           <link rel="preconnect" href="https://fonts.googleapis.com">
//           <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
//           <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,100;1,600&display=swap" rel="stylesheet">
//           <link rel="preconnect" href="https://fonts.googleapis.com">
//           <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
//           <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,100;1,600&display=swap" rel="stylesheet">
//           <title>Craft Center</title>
//         </head>

//         <body style="margin: 0; padding: 0;">
//           <table align="center" cellpadding="0" cellspacing="0" border="0" width="700"
//             style="table-layout: fixed;padding: 25px 0;">
//             <tbody>
//               <tr align="center">
//                 <td
//                   style="font-size: 16px; margin-top: 25px; display: block; font-family: 'Raleway', sans-serif; background: #000000;width: 150px;padding: 10px; border-radius: 5px;">
//                   <span style="color: #ffffff;font-weight: bold;">CRAFT</span> <span style="color: #ff0000;font-weight: bold;">CENTER</span></td>
//               </tr>
//               <tr>
//                 <td height="20"></td>
//               </tr>
//               <tr align="center">
//                 <td style="font-size: 28px; color: #000;font-family: 'Raleway', sans-serif;font-weight: 600;">Order Placed & Confirmed</td>
//               </tr>
//               <tr align="center">
//                 <td style="font-size: 14px; color: #000;font-family: 'Raleway', sans-serif;padding: 10px 0px;font-weight: 600;">Hi ${userData.name}, Thank You for your
//                   order!</td>
//               </tr>
//               <tr align="center">
//                 <td style="font-size: 13px; color: #000;font-family: 'Raleway', sans-serif; font-weight: 600;">We will update you when your order
//                   is shipped.</td>
//               </tr>
//               <tr>
//                 <td height="40"></td>
//               </tr>
//               <tr style="background-color: #ff000026;">
//                 <td>
//                   <table cellpadding="7" cellspacing="7" border="0" style="padding: 15px 20px; width: 100%;">
//                     <tbody>
//                       <tr align="left">
//                         <td style="font-size: 15px;font-family: 'Raleway', sans-serif;">
//                           Order Date
//                         </td>
//                         <td style="font-size: 16px;font-family: 'Raleway', sans-serif; text-align: right; font-weight: 600;">
//                          ${order[0].purchaseDate}
//                         </td>
//                       </tr>
//                       <tr align="left">
//                         <td style="font-size: 15px;font-family: 'Raleway', sans-serif;">
//                           Order ID
//                         </td>
//                         <td style="font-size: 16px;font-family: 'Raleway', sans-serif; text-align: right; font-weight: 600;">
//                         ${order[0].orderId}
//                         </td>
//                       </tr>
//                       <tr align="left">
//                         <td style="font-size: 15px;font-family: 'Raleway', sans-serif;">
//                           Expected Delivery Date
//                         </td>
//                         <td style="font-size: 16px;font-family: 'Raleway', sans-serif; text-align: right; font-weight: 600;">
//                             Soon you will get details
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </td>
//               </tr>
//               <tr>
//                 <td height="15"></td>
//               </tr>
//               <tr align="center">
//                 <td style="font-size: 16px; font-weight: 600; font-family: 'Raleway', sans-serif;">Here’s what you will find in your box</td>
//               </tr>
//               <tr>
//                 <td height="15"></td>
//               </tr>
//               <tr>
//                 <td>
//                   <table cellpadding="14" cellspacing="0" border="0" width="100%">
//                     <tbody>
//                     ${order[0].items.map(d => {
//       return (
//         `
//                             <tr>
//                                 <td style="width: 30%; border: 1px solid #808080;text-align: center;">
//                                     <img style="height: 100px; width: 100px; object-fit: contain;"
//                                         src=${d.imageURL}
//                                         alt=${d.title} />
//                                 </td>
//                                 <td
//                                     style="font-family: 'Raleway', sans-serif; border: 1px solid #808080; border-left: none; font-weight: 600;">
//                                     <p style="line-height: 1.5">
//                                         ${d.title}<br />
//                                         <span style="font-weight: normal;">Item Price:</span> ₹ ${d.salePrice}<br />
//                                         <span style="font-weight: normal;">Qty:</span> ${d.qty}
//                                     </p>
//                                 </td>
//                             </tr>
//                             <tr height="10"></tr>
//                         `
//       )
//     })
//       }
//                     </tbody>
//                   </table>
//                 </td>
//               </tr>
//               <tr>
//                 <td style="font-size: 24px; font-weight: 600;border-bottom: 1px solid;padding: 10px 0px;padding-top: 20px; font-family: 'Raleway', sans-serif;">Payment Information
//                 </td>
//               </tr>
//               <tr>
//                 <td>
//                   <table cellpadding="10" cellspacing="0" border="0" width="100%">
//                     <tbody>
//                       <tr>
//                         <td align="left"
//                           style="color: #808080;font-family: 'Raleway', sans-serif;padding: 0;">Order Total
//                         </td>
//                         <td align="right"
//                           style="color: #000; font-weight: 600; font-family: 'Raleway', sans-serif;padding: 10px;">₹ ${order[0].items.reduce((total, data) => total + (data.salePrice * data.qty), 0)}</td>
//                       </tr>
//                       <tr>
//                         <td align="left"
//                           style="color: #808080;font-family: 'Raleway', sans-serif;padding: 0;">Coupon
//                           Discount</td>
//                         <td align="right"
//                           style="color: #000; font-weight: 600; font-family: 'Raleway', sans-serif;padding: 10px;">-₹ 0</td>
//                       </tr>
//                       <tr>
//                         <td align="left"
//                           style="color: #808080;font-family: 'Raleway', sans-serif;padding: 0;">Shipping
//                           Charges</td>
//                         <td align="right"
//                           style="color: #000; font-weight: 600; font-family: 'Raleway', sans-serif;padding: 10px;">₹ 0</td>
//                       </tr>
//                       <tr>
//                         <td align="left"
//                           style="color: #808080; font-family: 'Raleway', sans-serif;padding: 0;">Total Order
//                           Amount</td>
//                         <td align="right"
//                           style="color: #000; font-weight: 600; font-family: 'Raleway', sans-serif;padding: 10px;">₹ ${order[0].items.reduce((total, data) => total + (data.salePrice * data.qty), 0)}</td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </td>
//               </tr>
//               <tr height="30"></tr>
//               <tr>
//                 <td style="font-size: 24px; font-weight: 600;border-bottom: 1px solid;padding: 10px 0px; font-family: 'Raleway', sans-serif;">
//                   Delivery Address</td>
//               </tr>
//               <tr>
//                 <td>
//                   <table cellpadding="10" cellspacing="0" border="0" width="100%">
//                     <tbody>
//                       <tr height="20"></tr>
//                       <tr>
//                         <td align="left"
//                           style="color: #000000;font-family: 'Raleway', sans-serif;padding: 0; font-family: 'Raleway', sans-serif;">${userData.name}
//                         </td>
//                         <td align="right"
//                           style="color: #000; font-weight: 700; font-family: 'Raleway', sans-serif;padding: 10px;"></td>
//                       </tr>
//                       <tr>
//                         <td align="left"
//                           style="color: #000; font-family: 'Raleway', sans-serif;padding: 0; font-family: 'Raleway', sans-serif;">
//                           ${order[0].address.company}
//                             ${order[0].address.add1}
//                             ${order[0].address.add2}
//                             ${order[0].address.city},${order[0].address.pinCode}
//                             ${order[0].address.state}, ${order[0].address.country}
//                             ${order[0].address.phone}
//                         </td>
//                         <td align="right"
//                           style="color: #000; font-weight: 700; font-family: 'Raleway', sans-serif;padding: 10px;"></td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </td>
//               </tr>
//               <!-- <tr>
//                 <td>Order Total</td>
//                 <td style="font-weight: 600;">$ 399</td>
//               </tr> -->
//               <tr>
//                 <td height="40"></td>
//               </tr>
//               <tr>
//                 <td height="10"></td>
//               </tr>
//               <tr>
//                 <td height="50"></td>
//               </tr>
//               <tr style="background-color: #ff000026;">
//                 <td>
//                   <table cellpadding="0" cellspacing="0" border="0" width="100%" style="padding: 25px 20px;">
//                     <tbody>
//                       <tr>
//                         <td>
//                           <table cellpadding="0" cellspacing="0" border="0" width="100%">
//                             <tbody>
//                               <tr>
//                                 <td
//                                   style="font-family: 'Raleway', sans-serif; color: #000; font-weight: normal; font-size:14px ">
//                                   Ready to ship</td>
//                                 <td>|</td>
//                                 <td
//                                   style="font-family: 'Raleway', sans-serif; color: #000; font-weight: normal; font-size:14px "
//                                   align="center">Expected delivery within 5-7 days</td>
//                                 <td>|</td>
//                                 <td
//                                   style="font-family: 'Raleway', sans-serif; color: #000; font-weight: normal; font-size:14px "
//                                   align="right">Free Delivery</td>
//                               </tr>
//                             </tbody>
//                           </table>
//                         </td>
//                       </tr>
//                       <tr>
//                         <td height="25"></td>
//                       </tr>
//                       <tr>
//                         <td>
//                           <table cellpadding="0" cellspacing="0" border="0" width="100%">
//                             <tbody>
//                               <tr>
//                                 <td
//                                   style="font-family: 'Raleway', sans-serif; color: #000; font-weight: normal; font-size:14px ">
//                                   Delivery FAQ</td>
//                                 <td>|</td>
//                                 <td
//                                   style="font-family: 'Raleway', sans-serif; color: #000; font-weight: normal; font-size:14px "
//                                   align="center">Order FAQ</td>
//                                 <td>|</td>
//                                 <td
//                                   style="font-family: 'Raleway', sans-serif; color: #000; font-weight: normal; font-size:14px "
//                                   align="right">Return FAQ</td>
//                               </tr>
//                             </tbody>
//                           </table>
//                         </td>
//                       </tr>

//                       <tr>
//                         <td height="25"></td>
//                       </tr>
//                       <tr>
//                         <td>
//                           <table cellpadding="0" cellspacing="0" border="0" width="100%">
//                             <tbody>
//                               <tr>
//                                 <td
//                                   style="font-family: 'Raleway', sans-serif; color: #000; font-weight: normal; font-size:14px ">
//                                   Customer Care</td>
//                                 <td>|</td>
//                                 <td
//                                   style="font-family: 'Raleway', sans-serif; color: #000; font-weight: normal; font-size:14px "
//                                   align="center">High Quality</td>
//                                 <td>|</td>
//                                 <td
//                                   style="font-family: 'Raleway', sans-serif; color: #000; font-weight: normal; font-size:14px "
//                                   align="right">Best Choice</td>

//                               </tr>
//                             </tbody>
//                           </table>
//                         </td>
//                       </tr>
//                       <tr>
//                         <td height="25"></td>
//                       </tr>
//                       <tr>
//                         <td>
//                           <table cellpadding="0" cellspacing="0" border="0" width="100%">
//                             <tbody>
//                               <tr>

//                               </tr>
//                             </tbody>
//                           </table>
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </body>

//         </html>`
//   };
//   transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//       return error
//     } else {
//       return info.response
//     }
//   });
// }
const sendEmail = (userData, order, subject) => {
  var msg;
  console.log('user data',userData)
  if (subject == 'Order Confirmed') {
    msg = {
      to: userData.email, // Change to your recipient
      from: process.env.senderEmail, // Change to your verified sender
      subject: subject,
      html: `<!DOCTYPE html>
      <html lang="en">
      
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,100;1,600&display=swap" rel="stylesheet">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,100;1,600&display=swap" rel="stylesheet">
        <title>Craft Center</title>
      </head>
      
      <body style="margin: 0; padding: 0;">
        <table align="center" cellpadding="0" cellspacing="0" border="0" width="700"
          style="table-layout: fixed;padding: 25px 0;">
          <tbody>
            <tr align="center">
              <td 
                style="font-size: 16px; margin-top: 25px; display: block; font-family: 'Raleway', sans-serif; background: #000000;width: 150px;padding: 10px; border-radius: 5px;">
                <a href="#"><span style="color: #ffffff;font-weight: bold;">CRAFT</span> <span style="color: #ff0000;font-weight: bold;">CENTER</span></a></td>
            </tr>
            <tr>
              <td height="20"></td>
            </tr>
            <tr align="center">
              <td style="font-size: 28px; color: #000;font-family: 'Raleway', sans-serif;font-weight: 600;">Order Placed & Confirmed</td>
            </tr>
            <tr align="center">
              <td style="font-size: 14px; color: #000;font-family: 'Raleway', sans-serif;padding: 10px 0px;font-weight: 600;">Hi ${userData.name}, Thank You for your
                order!</td>
            </tr>
            <tr align="center">
              <td style="font-size: 13px; color: #000;font-family: 'Raleway', sans-serif; font-weight: 600;">We will update you when your order
                is shipped.</td>
            </tr>
            <tr>
              <td height="40"></td>
            </tr>
            <tr style="background-color: #ff000026;">
              <td>
                <table cellpadding="7" cellspacing="7" border="0" style="padding: 15px 20px; width: 100%;">
                  <tbody>
                    <tr align="left">
                      <td style="font-size: 15px;font-family: 'Raleway', sans-serif;">
                        Order Date
                      </td>
                      <td style="font-size: 16px;font-family: 'Raleway', sans-serif; text-align: right; font-weight: 600;">
                       ${order[0].purchaseDate}
                      </td>
                    </tr>
                    <tr align="left">
                      <td style="font-size: 15px;font-family: 'Raleway', sans-serif;">
                        Order ID
                      </td>
                      <td style="font-size: 16px;font-family: 'Raleway', sans-serif; text-align: right; font-weight: 600;">
                      ${order[0].orderId}
                      </td>
                    </tr>
                    <tr align="left">
                      <td style="font-size: 15px;font-family: 'Raleway', sans-serif;">
                        Expected Delivery Date
                      </td>
                      <td style="font-size: 16px;font-family: 'Raleway', sans-serif; text-align: right; font-weight: 600;">
                          Soon you will get details
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td height="15"></td>
            </tr>
            <tr align="center">
              <td style="font-size: 16px; font-weight: 600; font-family: 'Raleway', sans-serif;">Here’s what you will find in your box</td>
            </tr>
            <tr>
              <td height="15"></td>
            </tr>
            <tr>
              <td>
                <table cellpadding="14" cellspacing="0" border="0" width="100%">
                  <tbody>
                  ${order[0].items.map(d => {
        return (
          `
                          <tr>
                              <td style="width: 30%; border: 1px solid #808080;text-align: center;">
                                  <img style="height: 100px; width: 100px; object-fit: contain;"
                                      src=${d.imageURL}
                                      alt=${d.title} />
                              </td>
                              <td
                                  style="font-family: 'Raleway', sans-serif; border: 1px solid #808080; border-left: none; font-weight: 600;">
                                  <p style="line-height: 1.5">
                                      ${d.title}<br />
                                      <span style="font-weight: normal;">Item Price:</span> ₹ ${d.salePrice}<br />
                                      <span style="font-weight: normal;">Qty:</span> ${d.qty}
                                  </p>
                              </td>
                          </tr>
                          <tr height="10"></tr>
                      `
        )
      })
        }
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td style="font-size: 24px; font-weight: 600;border-bottom: 1px solid;padding: 10px 0px;padding-top: 20px; font-family: 'Raleway', sans-serif;">Payment Information
              </td>
            </tr>
            <tr>
              <td>
                <table cellpadding="10" cellspacing="0" border="0" width="100%">
                  <tbody>
                    <tr>
                      <td align="left"
                        style="color: #808080;font-family: 'Raleway', sans-serif;padding: 0;">Order Total
                      </td>
                      <td align="right"
                        style="color: #000; font-weight: 600; font-family: 'Raleway', sans-serif;padding: 10px;">₹ ${order[0].items.reduce((total, data) => total + (data.salePrice * data.qty), 0)}</td>
                    </tr>
                    <tr>
                      <td align="left"
                        style="color: #808080;font-family: 'Raleway', sans-serif;padding: 0;">Coupon
                        Discount</td>
                      <td align="right"
                        style="color: #000; font-weight: 600; font-family: 'Raleway', sans-serif;padding: 10px;">-₹ 0</td>
                    </tr>
                    <tr>
                      <td align="left"
                        style="color: #808080;font-family: 'Raleway', sans-serif;padding: 0;">Shipping
                        Charges</td>
                      <td align="right"
                        style="color: #000; font-weight: 600; font-family: 'Raleway', sans-serif;padding: 10px;">₹ 0</td>
                    </tr>
                    <tr>
                      <td align="left"
                        style="color: #808080; font-family: 'Raleway', sans-serif;padding: 0;">Total Order
                        Amount</td>
                      <td align="right"
                        style="color: #000; font-weight: 600; font-family: 'Raleway', sans-serif;padding: 10px;">₹ ${order[0].items.reduce((total, data) => total + (data.salePrice * data.qty), 0)}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr height="30"></tr>
            <tr>
              <td style="font-size: 24px; font-weight: 600;border-bottom: 1px solid;padding: 10px 0px; font-family: 'Raleway', sans-serif;">
                Delivery Address</td>
            </tr>
            <tr>
              <td>
                <table cellpadding="10" cellspacing="0" border="0" width="100%">
                  <tbody>
                    <tr height="20"></tr>
                    <tr>
                      <td align="left"
                        style="color: #000000;font-family: 'Raleway', sans-serif;padding: 0; font-family: 'Raleway', sans-serif;">${userData.name}
                      </td>
                      <td align="right"
                        style="color: #000; font-weight: 700; font-family: 'Raleway', sans-serif;padding: 10px;"></td>
                    </tr>
                    <tr>
                      <td align="left"
                        style="color: #000; font-family: 'Raleway', sans-serif;padding: 0; font-family: 'Raleway', sans-serif;">
                        ${order[0].address.company}
                          ${order[0].address.add1}
                          ${order[0].address.add2}
                          ${order[0].address.city},${order[0].address.pinCode}
                          ${order[0].address.state}, ${order[0].address.country}
                          ${order[0].address.phone}
                      </td>
                      <td align="right"
                        style="color: #000; font-weight: 700; font-family: 'Raleway', sans-serif;padding: 10px;"></td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <!-- <tr>
              <td>Order Total</td>
              <td style="font-weight: 600;">$ 399</td>
            </tr> -->
            <tr>
              <td height="40"></td>
            </tr>
            <tr>
              <td height="10"></td>
            </tr>
            <tr>
              <td height="50"></td>
            </tr>
            <tr style="background-color: #ff000026;">
              <td>
                <table cellpadding="0" cellspacing="0" border="0" width="100%" style="padding: 25px 20px;">
                  <tbody>
                    <tr>
                      <td>
                        <table cellpadding="0" cellspacing="0" border="0" width="100%">
                          <tbody>
                            <tr>
                              <td
                                style="font-family: 'Raleway', sans-serif; color: #000; font-weight: normal; font-size:14px ">
                                Ready to ship</td>
                              <td>|</td>
                              <td
                                style="font-family: 'Raleway', sans-serif; color: #000; font-weight: normal; font-size:14px "
                                align="center">Expected delivery within 5-7 days</td>
                              <td>|</td>
                              <td
                                style="font-family: 'Raleway', sans-serif; color: #000; font-weight: normal; font-size:14px "
                                align="right">Free Delivery</td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td height="25"></td>
                    </tr>
                    <tr>
                      <td>
                        <table cellpadding="0" cellspacing="0" border="0" width="100%">
                          <tbody>
                            <tr>
                              <td
                                style="font-family: 'Raleway', sans-serif; color: #000; font-weight: normal; font-size:14px ">
                                Delivery FAQ</td>
                              <td>|</td>
                              <td
                                style="font-family: 'Raleway', sans-serif; color: #000; font-weight: normal; font-size:14px "
                                align="center">Order FAQ</td>
                              <td>|</td>
                              <td
                                style="font-family: 'Raleway', sans-serif; color: #000; font-weight: normal; font-size:14px "
                                align="right">Return FAQ</td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
      
                    <tr>
                      <td height="25"></td>
                    </tr>
                    <tr>
                      <td>
                        <table cellpadding="0" cellspacing="0" border="0" width="100%">
                          <tbody>
                            <tr>
                              <td
                                style="font-family: 'Raleway', sans-serif; color: #000; font-weight: normal; font-size:14px ">
                                Customer Care</td>
                              <td>|</td>
                              <td
                                style="font-family: 'Raleway', sans-serif; color: #000; font-weight: normal; font-size:14px "
                                align="center">High Quality</td>
                              <td>|</td>
                              <td
                                style="font-family: 'Raleway', sans-serif; color: #000; font-weight: normal; font-size:14px "
                                align="right">Best Choice</td>
      
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td height="25"></td>
                    </tr>
                    <tr>
                      <td>
                        <table cellpadding="0" cellspacing="0" border="0" width="100%">
                          <tbody>
                            <tr>
      
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
      
      </html>`
    }
  } else if (subject == 'Order Cancelled') {
    msg = {
      to: userData.email, // Change to your recipient
      from: process.env.senderEmail, // Change to your verified sender
      subject: subject,
      html: `<!DOCTYPE html>
      <html lang="en">
      
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,100;1,600&display=swap" rel="stylesheet">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,100;1,600&display=swap" rel="stylesheet">
        <title>Craft Center</title>
      </head>
      
      <body style="margin: 0; padding: 0;">
        <table align="center" cellpadding="0" cellspacing="0" border="0" width="700"
          style="table-layout: fixed;padding: 25px 0;">
          <tbody>
            <tr align="center">
              <td 
                style="font-size: 16px; margin-top: 25px; display: block; font-family: 'Raleway', sans-serif; background: #000000;width: 150px;padding: 10px; border-radius: 5px;">
                <a href="#"><span style="color: #ffffff;font-weight: bold;">CRAFT</span> <span style="color: #ff0000;font-weight: bold;">CENTER</span></a></td>
            </tr>
            <tr>
              <td height="20"></td>
            </tr>
            <tr align="center">
              <td style="font-size: 28px; color: #000;font-family: 'Raleway', sans-serif;font-weight: 600;">Order Cancelled</td>
            </tr>
            <tr align="center">
              <td style="font-size: 14px; color: #000;font-family: 'Raleway', sans-serif;padding: 10px 0px;font-weight: 600;">Hi ${userData.name}, Your order has been cancelled</td>
            </tr>
            <tr align="center">
              <td style="font-size: 13px; color: #000;font-family: 'Raleway', sans-serif; font-weight: 600;">We will update you when your refund
                is initiated.</td>
            </tr>
            <tr>
              <td height="40"></td>
            </tr>
            <tr style="background-color: #ff000026;">
              <td>
                <table cellpadding="7" cellspacing="7" border="0" style="padding: 15px 20px; width: 100%;">
                  <tbody>
                    <tr align="left">
                      <td style="font-size: 15px;font-family: 'Raleway', sans-serif;">
                        Order Date
                      </td>
                      <td style="font-size: 16px;font-family: 'Raleway', sans-serif; text-align: right; font-weight: 600;">
                       ${order.purchaseDate}
                      </td>
                    </tr>
                    <tr align="left">
                      <td style="font-size: 15px;font-family: 'Raleway', sans-serif;">
                        Order ID
                      </td>
                      <td style="font-size: 16px;font-family: 'Raleway', sans-serif; text-align: right; font-weight: 600;">
                      ${order.orderId}
                      </td>
                    </tr>
                    <tr align="left">
                      <td style="font-size: 15px;font-family: 'Raleway', sans-serif;">
                        Refund Amount
                      </td>
                      <td style="font-size: 16px;font-family: 'Raleway', sans-serif; text-align: right; font-weight: 600;">
                      ₹ ${order.items.reduce((total, data) => total + (data.salePrice * data.qty), 0)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td height="15"></td>
            </tr>
            <tr align="center">
              <td style="font-size: 16px; font-weight: 600; font-family: 'Raleway', sans-serif;">Here’s what you ordered</td>
            </tr>
            <tr>
              <td height="15"></td>
            </tr>
            <tr>
              <td>
                <table cellpadding="14" cellspacing="0" border="0" width="100%">
                  <tbody>
                  ${order.items.map(d => {
        return (
          `
                          <tr>
                              <td style="width: 30%; border: 1px solid #808080;text-align: center;">
                                  <img style="height: 100px; width: 100px; object-fit: contain;"
                                      src=${d.imageURL}
                                      alt=${d.title} />
                              </td>
                              <td
                                  style="font-family: 'Raleway', sans-serif; border: 1px solid #808080; border-left: none; font-weight: 600;">
                                  <p style="line-height: 1.5">
                                      ${d.title}<br />
                                      <span style="font-weight: normal;">Item Price:</span> ₹ ${d.salePrice}<br />
                                      <span style="font-weight: normal;">Qty:</span> ${d.qty}
                                  </p>
                              </td>
                          </tr>
                          <tr height="10"></tr>
                      `
        )
      })
        }
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td style="font-size: 24px; font-weight: 600;border-bottom: 1px solid;padding: 10px 0px;padding-top: 20px; font-family: 'Raleway', sans-serif;">Payment Information
              </td>
            </tr>
            <tr>
              <td>
                <table cellpadding="10" cellspacing="0" border="0" width="100%">
                  <tbody>
                    <tr>
                      <td align="left"
                        style="color: #808080;font-family: 'Raleway', sans-serif;padding: 0;">Order Total
                      </td>
                      <td align="right"
                        style="color: #000; font-weight: 600; font-family: 'Raleway', sans-serif;padding: 10px;">₹ ${order.items.reduce((total, data) => total + (data.salePrice * data.qty), 0)}</td>
                    </tr>
                    <tr>
                      <td align="left"
                        style="color: #808080;font-family: 'Raleway', sans-serif;padding: 0;">Coupon
                        Discount</td>
                      <td align="right"
                        style="color: #000; font-weight: 600; font-family: 'Raleway', sans-serif;padding: 10px;">-₹ 0</td>
                    </tr>
                    <tr>
                      <td align="left"
                        style="color: #808080;font-family: 'Raleway', sans-serif;padding: 0;">Shipping
                        Charges</td>
                      <td align="right"
                        style="color: #000; font-weight: 600; font-family: 'Raleway', sans-serif;padding: 10px;">₹ 0</td>
                    </tr>
                    <tr>
                      <td align="left"
                        style="color: #808080; font-family: 'Raleway', sans-serif;padding: 0;">Total Order
                        Amount</td>
                      <td align="right"
                        style="color: #000; font-weight: 600; font-family: 'Raleway', sans-serif;padding: 10px;">₹ ${order.items.reduce((total, data) => total + (data.salePrice * data.qty), 0)}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr height="30"></tr>
            <tr>
              <td style="font-size: 24px; font-weight: 600;border-bottom: 1px solid;padding: 10px 0px; font-family: 'Raleway', sans-serif;">
                Delivery Address</td>
            </tr>
            <tr>
              <td>
                <table cellpadding="10" cellspacing="0" border="0" width="100%">
                  <tbody>
                    <tr height="20"></tr>
                    <tr>
                      <td align="left"
                        style="color: #000000;font-family: 'Raleway', sans-serif;padding: 0; font-family: 'Raleway', sans-serif;">${userData.name}
                      </td>
                      <td align="right"
                        style="color: #000; font-weight: 700; font-family: 'Raleway', sans-serif;padding: 10px;"></td>
                    </tr>
                    <tr>
                      <td align="left"
                        style="color: #000; font-family: 'Raleway', sans-serif;padding: 0; font-family: 'Raleway', sans-serif;">
                        ${order.address.company}
                          ${order.address.add1}
                          ${order.address.add2}
                          ${order.address.city},${order.address.pinCode}
                          ${order.address.state}, ${order.address.country}
                          ${order.address.phone}
                      </td>
                      <td align="right"
                        style="color: #000; font-weight: 700; font-family: 'Raleway', sans-serif;padding: 10px;"></td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <!-- <tr>
              <td>Order Total</td>
              <td style="font-weight: 600;">$ 399</td>
            </tr> -->
            <tr>
              <td height="40"></td>
            </tr>
            <tr>
              <td height="10"></td>
            </tr>
            <tr>
              <td height="50"></td>
            </tr>
            <tr style="background-color: #ff000026;">
              <td>
                <table cellpadding="0" cellspacing="0" border="0" width="100%" style="padding: 25px 20px;">
                  <tbody>
                    <tr>
                      <td>
                        <table cellpadding="0" cellspacing="0" border="0" width="100%">
                          <tbody>
                            <tr>
                              <td
                                style="font-family: 'Raleway', sans-serif; color: #000; font-weight: normal; font-size:14px ">
                                Ready to ship</td>
                              <td>|</td>
                              <td
                                style="font-family: 'Raleway', sans-serif; color: #000; font-weight: normal; font-size:14px "
                                align="center">Expected delivery within 5-7 days</td>
                              <td>|</td>
                              <td
                                style="font-family: 'Raleway', sans-serif; color: #000; font-weight: normal; font-size:14px "
                                align="right">Free Delivery</td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td height="25"></td>
                    </tr>
                    <tr>
                      <td>
                        <table cellpadding="0" cellspacing="0" border="0" width="100%">
                          <tbody>
                            <tr>
                              <td
                                style="font-family: 'Raleway', sans-serif; color: #000; font-weight: normal; font-size:14px ">
                                Delivery FAQ</td>
                              <td>|</td>
                              <td
                                style="font-family: 'Raleway', sans-serif; color: #000; font-weight: normal; font-size:14px "
                                align="center">Order FAQ</td>
                              <td>|</td>
                              <td
                                style="font-family: 'Raleway', sans-serif; color: #000; font-weight: normal; font-size:14px "
                                align="right">Return FAQ</td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
      
                    <tr>
                      <td height="25"></td>
                    </tr>
                    <tr>
                      <td>
                        <table cellpadding="0" cellspacing="0" border="0" width="100%">
                          <tbody>
                            <tr>
                              <td
                                style="font-family: 'Raleway', sans-serif; color: #000; font-weight: normal; font-size:14px ">
                                Customer Care</td>
                              <td>|</td>
                              <td
                                style="font-family: 'Raleway', sans-serif; color: #000; font-weight: normal; font-size:14px "
                                align="center">High Quality</td>
                              <td>|</td>
                              <td
                                style="font-family: 'Raleway', sans-serif; color: #000; font-weight: normal; font-size:14px "
                                align="right">Best Choice</td>
      
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td height="25"></td>
                    </tr>
                    <tr>
                      <td>
                        <table cellpadding="0" cellspacing="0" border="0" width="100%">
                          <tbody>
                            <tr>
      
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
      
      </html>`
    }
  } else if (subject == 'Successfully Registered') {
    msg = {
      to: userData.email, // Change to your recipient
      from: process.env.senderEmail, // Change to your verified sender
      subject: subject,
      html: `<!DOCTYPE html>
      <html lang="en">
      
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,100;1,600&display=swap" rel="stylesheet">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,100;1,600&display=swap" rel="stylesheet">
        <title>Craft Center</title>
      </head>
      
      <body style="margin: 0; padding: 0;">
        <table align="center" cellpadding="0" cellspacing="0" border="0" width="700"
          style="table-layout: fixed;padding: 25px 0;">
          <tbody>
            <tr align="center">
              <td 
                style="font-size: 16px; margin-top: 25px; display: block; font-family: 'Raleway', sans-serif; background: #000000;width: 150px;padding: 10px; border-radius: 5px;">
                <a href="#"><span style="color: #ffffff;font-weight: bold;">CRAFT</span> <span style="color: #ff0000;font-weight: bold;">CENTER</span></a></td>
            </tr>
            <tr>
              <td height="20"></td>
            </tr>
            <tr align="center">
              <td style="font-size: 28px; color: #000;font-family: 'Raleway', sans-serif;font-weight: 600;">Thanks  for Registering at craft center</td>
            </tr>
            <tr align="center">
              <td style="font-size: 14px; color: #000;font-family: 'Raleway', sans-serif;padding: 10px 0px;font-weight: 600;">Hi ${userData.name}, Thank you for creating your account at carft center.</td>
            </tr>
            <tr align="center">
              <td style="font-size: 13px; color: #000;font-family: 'Raleway', sans-serif; font-weight: 600;">To sign in to your account, please visit <a href='https://www.craftcenter.in'>https://www.craftcenter.in</a> or <a href='https://www.craftcenter.in'>Click Here.</a></td>
            </tr>
            <tr>
              <td height="40"></td>
            </tr>
            <tr align="center">
              <td style="font-size: 13px; color: #000;font-family: 'Raleway', sans-serif; font-weight: 600;">Many thanks,</a></td>
            </tr>
            <tr align="center">
              <td style="font-size: 13px; color: #000;font-family: 'Raleway', sans-serif; font-weight: 600;">Team craft center</a></td>
            </tr>
          </tbody>
        </table>
      </body>
      
      </html>`
    }
  }else if (subject == 'Forgot Password') {
    msg = {
      to: userData.singleUser.email, // Change to your recipient
      from: process.env.senderEmail, // Change to your verified sender
      subject: subject,
      html: `<!DOCTYPE html>
      <html lang="en">
      
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,100;1,600&display=swap" rel="stylesheet">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,100;1,600&display=swap" rel="stylesheet">
        <title>Craft Center</title>
      </head>
      
      <body style="margin: 0; padding: 0;">
        <table align="center" cellpadding="0" cellspacing="0" border="0" width="700"
          style="table-layout: fixed;padding: 25px 0;">
          <tbody>
            <tr align="center">
              <td 
                style="font-size: 16px; margin-top: 25px; display: block; font-family: 'Raleway', sans-serif; background: #000000;width: 150px;padding: 10px; border-radius: 5px;">
                <a href="#"><span style="color: #ffffff;font-weight: bold;">CRAFT</span> <span style="color: #ff0000;font-weight: bold;">CENTER</span></a></td>
            </tr>
            <tr>
              <td height="20"></td>
            </tr>
            <tr align="center">
              <td style="font-size: 28px; color: #000;font-family: 'Raleway', sans-serif;font-weight: 600;">Password Reset</td>
            </tr>
            <tr align="center">
              <td style="font-size: 14px; color: #000;font-family: 'Raleway', sans-serif;padding: 10px 0px;">Hi ${userData.singleUser.name},</td>
            </tr>
            <tr align="center">
              <td style="font-size: 14px; color: #000;font-family: 'Raleway', sans-serif;">If you've lost your password or wish to reset it, use the link below to get started</td>
            </tr>
            <tr align="center">
              <td style="font-size: 14px; color: #000;font-family: 'Raleway', sans-serif; font-weight: 600;"><a href='http://localhost:3000/password/reset/${userData.token}'>Reset Your Password</a></td>
            </tr>
            <tr>
              <td height="40"></td>
            </tr>
            <tr align="center">
              <td style="font-size: 13px; color: #000;font-family: 'Raleway', sans-serif; font-weight: 600;">Many thanks,</a></td>
            </tr>
            <tr align="center">
              <td style="font-size: 13px; color: #000;font-family: 'Raleway', sans-serif; font-weight: 600;">Team craft center</a></td>
            </tr>
          </tbody>
        </table>
      </body>
      
      </html>`
    }
  }

  sgMail
    .send(msg)
    .then((response) => {
      console.log(response[0].statusCode)
      console.log(response[0].headers)
    })
    .catch((error) => {
      console.error(error)
    })
}
module.exports = { sendEmail }
