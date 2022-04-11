package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.IInvoiceRepository;
import com.app.pojos.Invoice;

@Service
@Transactional
public class InvoiceServiceImpl implements IInvoiceService {
	
	@Autowired
	private IInvoiceRepository invoiceRepo;

	//get invoice
	@Override
	public Invoice getInvoiceByJobCardId(int jobCardId) {
		  Invoice bill=invoiceRepo.getInvoice(jobCardId);
		return bill;
	}
	

}
