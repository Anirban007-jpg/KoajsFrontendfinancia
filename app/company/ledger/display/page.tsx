import { getCookie } from "@/actions/auth";
// import { getLedgers } from "@/actions/ledger";
import Common from "@/components/sections/CommonSection/Common";
import LedgerContent from "@/components/sections/Ledger/LedgerContent";
import LedgerDisplay from "@/components/sections/Ledger/LedgerDisplay";


export const getLedgers = async () => {
  // const token = getCookie('token');
  const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/ledger/get`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'GET',
    cache: "no-store",
  }
  );

  const data = await response.json();
  return data;
}

const page = async () => {
  const data = await getLedgers();
  // console.log(data.ledgers);
  const ledgerarray = data.ledgers;
  // console.log(ledgerarray)

  return (
    <Common>
      <LedgerDisplay array={ledgerarray} />
    </Common>
  );
}

export default page;