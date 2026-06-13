import { CustomerForm } from "@/features/customers/components/customer-form";
import { CustomerList } from "@/features/customers/components/customer-list";
import { CustomerSummary } from "@/features/customers/components/customer-summary";
import { createCustomerAction } from "@/features/customers/server/actions";
import { getCustomersPageData } from "@/features/customers/server/queries";

const customerDataLoader: typeof getCustomersPageData = getCustomersPageData;
const customerCreateAction: typeof createCustomerAction = createCustomerAction;

void customerDataLoader;
void customerCreateAction;
void CustomerForm;
void CustomerList;
void CustomerSummary;