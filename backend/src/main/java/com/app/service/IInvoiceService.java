package com.app.service;

import com.app.pojos.Invoice;

public interface IInvoiceService {
      // add a method to get invoice by jobcard id
	Invoice getInvoiceByJobCardId(int jobCardId);
}
