package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.app.pojos.Invoice;

public interface IInvoiceRepository extends JpaRepository<Invoice, Integer>
{
   //add a method to get invoice by jobcardId
	@Query("select i from Invoice i join fetch i.billEntry where i.jobcard.id=:jid")
	Invoice getInvoice(@Param (value="jid") int jobCardId);
}
