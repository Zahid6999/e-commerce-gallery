import Image from 'next/image';

import Commitment2 from '../../../public/images/icons/delivery-car.svg';
import Commitment3 from '../../../public/images/icons/lovely.svg';
import Commitment1 from '../../../public/images/icons/secure-payment.svg';
import Commitment4 from '../../../public/images/icons/star.svg';

const OurCommitments = () => {
  return (
    <section className=" pb-25 relative z-0 ">
      <div className="main-container bg-white shadow-5 rounded-4xl py-10.5 px-29">
        <div className="flex justify-around items-center gap-8">
          <article className="space-y-4 flex flex-col items-center">
            <figure className="size-30 rounded-t-3xl rounded-bl-3xl bg-primary flex justify-center items-center">
              <Image src={Commitment1} alt="Commitment 1" />
            </figure>
            <h3 className="text-heading-4 font-semibold">Secure Payment</h3>
          </article>
          <article className="space-y-4 flex flex-col items-center">
            <figure className="size-30 rounded-t-3xl rounded-bl-3xl bg-primary flex justify-center items-center">
              <Image src={Commitment2} alt="Commitment 1" />
            </figure>
            <h3 className="text-heading-4 font-semibold">Fast Delivery</h3>
          </article>
          <article className="space-y-4 flex flex-col items-center">
            <figure className="size-30 rounded-t-3xl rounded-bl-3xl bg-primary flex justify-center items-center">
              <Image src={Commitment3} alt="Commitment 1" />
            </figure>
            <h3 className="text-heading-4 font-semibold">Secure Payment</h3>
          </article>
          <article className="space-y-4 flex flex-col items-center">
            <figure className="size-30 rounded-t-3xl rounded-bl-3xl bg-primary flex justify-center items-center">
              <Image src={Commitment4} alt="Commitment 1" />
            </figure>
            <h3 className="text-heading-4 font-semibold">Secure Payment</h3>
          </article>
        </div>
      </div>
    </section>
  );
};

OurCommitments.displayName = 'OurCommitments';
export default OurCommitments;
