import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { contactInfo } from "@/data/contactInfo";

const ContactPage = () => {
  return (
    <div className='pt-40 px-8 grid grid-cols-1 space-x-10 p-4 md:grid-cols-2'>
      <div className='flex flex-col space-y-20'>
        <div className='flex flex-col space-y-20'>
          <h1 className='text-8xl font-extrabold'>Let&apos;s get in touch</h1>
          <h2 className='text-3xl font-bold'>
            Don&apos;t be afraid to say hello with us!
          </h2>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col items-start'>
            <h4 className='text-sm font-light'>Phone</h4>
            <p>
              <a href={"tel:" + contactInfo.phone}>{contactInfo.phone}</a>
            </p>
          </div>
          <div className='flex flex-col items-start'>
            <h4 className='text-sm font-light'>Email</h4>
            <p>
              <a href={"mailto:" + contactInfo.email}>{contactInfo.email}</a>
            </p>
          </div>
          <div className='flex flex-col items-start'>
            <h4 className='text-sm font-light'>Address</h4>
            <p>{contactInfo.address}</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col space-y-10'>
        <div className='grid grid-cols-2 place-items-center'>
          {/* Svg of an arrow from left to right with small head and longe body */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 full 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='w-40 h-6 justify-self-stretch'
          >
            <path d='M0 12h100 M90 2l10 10 -10 10' />
          </svg>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
            dignissimos deserunt recusandae in laudantium voluptatem at. Eaque
            iusto quae eos laboriosam? Cumque expedita nihil numquam, molestiae
            nesciunt id sapiente quas.
          </p>
        </div>
        <form action='' className='flex flex-col space-y-4'>
          <h2 className='text-3xl font-bold py-4 '>Contact</h2>
          {/* MaterialUI Input boxes with text on top of them */}
          <div className='flex flex-row space-x-2'>
            <Input
              type='text'
              placeholder='Name'
              className='border-l-0 border-r-0 border-t-0 border-b-2 rounded-none  w-full focus:border-b ring-primary'
            />
            <Input
              type='email'
              placeholder='Email'
              className='border-l-0 border-r-0 border-t-0 border-b-2 rounded-none  w-full focus:border-b ring-primary'
            />
          </div>
          <Input
            type='text'
            placeholder='Subject'
            className='border-l-0 border-r-0 border-t-0 border-b-2 rounded-none  w-full focus:border-b ring-primary'
          />
          <Input
            type='text'
            placeholder='Message'
            className='border-l-0 border-r-0 border-t-0 border-b-2 rounded-none  w-full focus:border-b ring-primary'
          />
          <Button
            variant={"default"}
            className='bg-primary text-white rounded-none font-light py-6 w-full'
          >
            Send to us
          </Button>
        </form>
      </div>
    </div>
  );
};
export default ContactPage;
