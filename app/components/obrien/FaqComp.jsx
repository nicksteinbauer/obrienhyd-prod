import {useState} from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

export default function Faqs() {
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  return (
    <div>
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">
            I bought something from your store, when should I expect to receive
            my products?
          </AccordionHeader>
          <AccordionBody accordionId="1">
            Processing and shipping typically takes 3-5 business days. See the
            map below for the estimated shipping duration.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">
            How long is the O&apos;Brien warranty?
          </AccordionHeader>
          <AccordionBody accordionId="2">
            O&apos;Brien offers a one year warranty on all products except for
            non-towables, they have a 90 day warranty.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">
            Help! I am having an issue with my O&apos;Brien product and would
            like to inquire about a warranty, where should I start?
          </AccordionHeader>
          <AccordionBody accordionId="3">
            First, bring your proof of purchase and product back to the
            authorized O&apos;Brien dealer in which it was purchased from. All
            O&apos;Brien dealers honor our one year warranty. If for some reason
            you are unable to obtain a replacement through your O&apos;Brien
            dealer, please click on &apos;warranty&apos; under the contact tab
            and fill out and send to us the required information listed. We will
            reply to you ASAP, typically within 24 hours. If you are still
            having issues with finding a replacement, please contact
            O&apos;Brien customer service at 1 (800) 662-7436.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="4">
            Does O&apos;Brien sell replacement covers for their towable?
          </AccordionHeader>
          <AccordionBody accordionId="4">
            No. Unfortunately, due to costing, we are unable to manufacture
            covers separately for our inflatables.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="5">
            Oh no! I have lost the plug (Boston Valve) to my inflatable, how can
            I obtain a new one?
          </AccordionHeader>
          <AccordionBody accordionId="5">
            We have them in stock, <a href="https://obrien.com">here!</a>, If
            you are in a pinch and need one expedited, you can purchase
            replacement Boston Valves using expedited shipping through online
            dealers or consulting a local dealer in your area. For standard
            delivery, please contact O&apos;Brien customer service at 1 (800)
            662-7436. For a picture of a Boston Valve, please look under the
            accessories tab.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="6">
            My O&apos;Brien inflatable won&apos;t hold air, what can I do?
          </AccordionHeader>
          <AccordionBody accordionId="6">
            First, check your Boston Valve and ensure it is fastened securely,
            so that no air is able to escape. For instructions on proper
            inflation, please click on the following link for an instructional
            video. If you find that your leak is coming from a puncture or hole
            in the tube, follow the instruction on your O&apos;Brien repair
            patch that came with your inflatable. If your leak is on a seam or
            you are unable to repair it, please contact O&apos;Brien customer
            service if you would like to purchase a replacement .Please note, we
            only carry a select few replacement parts for tubes, and your tube
            may not be sold separately.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="7">
            What is the best way to inflate my O&apos;Brien tube?
          </AccordionHeader>
          <AccordionBody accordionId="7">
            <a href="https://obrien.com">Check out this video!</a>, The most
            common issues with inflatables are due to the fact that they are
            under inflated. Always be sure you inflate your tube properly.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="8">
            Wow, that Wakeboard looks awesome! I want to buy it. Where can I buy
            it?
          </AccordionHeader>
          <AccordionBody accordionId="8">
            You can only purchase product through an authorized O&apos;Brien
            dealer, and our website. To find a dealer in your area, please click
            on the O&apos;Brien dealer locator. From there, you will be able to
            use your address to find local dealers. If you would like to
            purchase product online, websites are listed in the dealer locator
            as well. O&apos;Brien is a wholesale company and unable to sell
            directly to the public.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="9">
            I have been an O&apos;Brien customer for years and have an older
            board or ski. Can I get replacement parts for my old skis, boards,
            or bindings?
          </AccordionHeader>
          <AccordionBody accordionId="9">
            Unfortunately we do not sell replacement parts or bindings for older
            (10 years or so) skis and wakeboards. For older ski bindings, please
            contact Wiley&apos;s at (206) 762-1300.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="10">
            I have an old O&apos;Brien ski or wakeboard. How much is it worth?
          </AccordionHeader>
          <AccordionBody accordionId="10">
            Unfortunately we are unable to assess market value for used product.
            Our best suggestion is to research popular sites such as EBAY or
            Craigslist for the going rate on similar or same product.
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
