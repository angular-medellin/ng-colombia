import { CheckoutConfirmation } from './../shared/models/checkout-confirmation.model';

import { TransactionResult } from './../shared/models/transaction-result.model';
import { TicketCheckoutService } from './../shared/services/ticket-checkout.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-confirmation',
	templateUrl: './confirmation.component.html',
	styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

	payUParams: any;
	checkoutConfirmation: CheckoutConfirmation;

	constructor(
		private route: ActivatedRoute,
		private router: Router) { }

	ngOnInit() {
		this.route
			.queryParams
			.subscribe(params => {
				this.payUParams = params;
				this.checkoutConfirmation = CheckoutConfirmation.mapCheckoutResponse(params);
			});
	}

}
