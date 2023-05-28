import InvoiceIssuerModel from "./InvoiceIssuerModel";
import InvoiceStatusModel from "./InvoiceStatusModel";
import ItemListModel from "./ItemListModel";
import PaymentTermModel from "./PaymentTermModel";
import SubjectModel from "./SubjectModel";

export default interface InvoiceModel {
    id?: number;
    projectDescription: string;
    invoiceDate: Date | null;
    idPaymentTerm?: number;
    idInvoiceStatus?: number;
    idSubject?: number;
    idInvoiceIssuer?: number;
    idUsuario?: number;
    status: number;
    paymentTerm: PaymentTermModel | null;
    invoiceStatus: InvoiceStatusModel | null;
    subject: SubjectModel | null;
    invoiceItems: ItemListModel[];
    invoiceIssuer: InvoiceIssuerModel | null;
}
