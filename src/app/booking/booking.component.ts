import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GooglePayButtonModule } from '@google-pay/button-angular'
import { ParticipantInterface } from '../../types';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [GooglePayButtonModule, FormsModule, CommonModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {

  eventData: any;
  // totalPrice: string = '100.00'

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.fetchEvent()
  }

  fetchEvent(): void {
    const eventid = this.route.snapshot.params['eventid'];
    const apiUrl = `http://localhost:3000/events/${eventid}`

    this.http.get(apiUrl)
      .subscribe({
        next: (response: any) => {
          console.log('GET request successful', response);
          this.eventData = response;
          // this.totalPrice = response.price.toString();
        },
        error: (error: any) => {
          console.error('Error occurred during GET request', error);
        }
      });
  }
  
  buttonWidth = 240
  paymentRequest: google.payments.api.PaymentDataRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
          allowedCardNetworks: ["AMEX", "VISA", "MASTERCARD"]
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId'
          }
        }
      }
    ],
    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: 'Demo Merchant'
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '100.00', // DYNAMIC
      currencyCode: 'GBP',
      countryCode: 'UK'
    }
  }

  onLoadPaymentData(event: any) {
    console.log(event, "DATA");
    window.location.href = 'http://localhost:4200' // REDIRECT TO A 'BOOKING COMPLETED' PAGE
  }
  
    formData: ParticipantInterface = {
      _id: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      postcode: ''
    }

  onClick(): void {

    console.log(this.formData);
    const eventid = this.route.snapshot.params['eventid']
    const dateindex = this.route.snapshot.params['dateindex']

    
    const apiUrl = `http://localhost:3000/events/${eventid}/${dateindex}`;

    this.http.post(apiUrl, this.formData)
    .subscribe({
      next: (response: any) => {
        console.log('Post successful', response);
        
        this.formData = {
          _id: '',
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          postcode: ''
        };
      },
      error: (error: any) => {
        console.error('Error occurred', error);
       
      }
    });
}

  }