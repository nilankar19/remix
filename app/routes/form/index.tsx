import { useActionData, Form, redirect, json } from "@remix-run/react";
import { z } from "zod";
import { formSchema } from "../../utils/validation";
import { ActionFunctionArgs } from "@remix-run/node";
import TelephoneInput from "./components/TelephoneInput";
// import '../../styles/form.css';
import '../../styles/form-f.css'

// Server-side validation and handling
export async function action({
    request,
  }: ActionFunctionArgs) {

    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    
    

    try {
      // Server-side validation using Zod
      formSchema.parse(data);

      
      // Handle successful validation
      // For example, save data to the database or perform other actions
      // await saveData(data);
    
      return redirect("/success");
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Return validation errors to the client
        console.log(error);
        
        
        return json({ errors: error.flatten().fieldErrors });
      }
      // Handle other errors
    //   console.error("Form submission error:", error);
      return { errors: { global: "Something went wrong. Please try again." } };
    }
  }

  interface ActionData {
    success?: boolean;
    errors?: Record<string, string>;
  }
  export default function MyForm() {
    const actionData = useActionData<ActionData | undefined>();
    console.log(actionData);
  
    return (
      <>
      <div className="backgroundBg"></div>
      <div className="fieldContWrapper">
          <div className="centerContainer">
      <Form method="post">
            <div className="FormHeader formHeaderInside">
                <div className="logoPosition">
                    <div className="hdrLogoImgDiv">
                        <img aria-hidden="true" src="" alt="brand name"/>
                    </div>
                    <div className="headerCont">
                        <h2 className="brandName" >Churi Market</h2>
                    </div>
                </div>
            </div>
            <ul className="page-section">
            <li className="form-line">
  <label htmlFor="businessName" className="text-[var(--label-txt-clr)] block font-semibold mb-2">
    Business Name
  </label>
  <div className="flex flex-col md:flex-row gap-3">
    <div className="flex-[0_1_49%]">
      <input
        id="businessName"
        name="businessName"
        className="w-full p-3 border border-[var(--input-bdr-clr)] rounded-md bg-[rgba(var(--input-bg-clr), var(--input-bg-opacity))] text-[var(--value-txt-clr)] focus:outline-none focus:border-[var(--input-focus-clr)]"
      />
      {actionData?.errors?.businessName && (
        <p className="text-[var(--error-txt-clr)] mt-1">{actionData.errors.businessName[0]}</p>
      )}
    </div>
  </div>
</li>

  <li className="form-line">
  <label htmlFor="contactName" className="text-[var(--label-txt-clr)] block font-semibold mb-2">
    Contact Name
  </label>
  <div className="flex flex-col md:flex-row gap-3">
    <div className="flex-[0_1_49%]">
      <input
        id="firstName"
        name="firstName"
        placeholder="First Name"
        className="w-full p-3 border border-[var(--input-bdr-clr)] rounded-md bg-[rgba(var(--input-bg-clr), var(--input-bg-opacity))] text-[var(--value-txt-clr)] focus:outline-none focus:border-[var(--input-focus-clr)]"
      />
      {actionData?.errors?.firstName && (
        <p className="text-[var(--error-txt-clr)]">{actionData.errors.firstName[0]}</p>
      )}
    </div>
    <div className="flex-[0_1_49%]">
      <input
        id="lastName"
        name="lastName"
        placeholder="Last Name"
        className="w-full p-3 border border-[var(--input-bdr-clr)] rounded-md bg-[rgba(var(--input-bg-clr), var(--input-bg-opacity))] text-[var(--value-txt-clr)] focus:outline-none focus:border-[var(--input-focus-clr)]"
      />
      {actionData?.errors?.lastName && (
        <p className="text-[var(--error-txt-clr)]">{actionData.errors.lastName[0]}</p>
      )}
    </div>
  </div>
</li>

<li className="form-line">
  <label htmlFor="preferredPronouns" className="text-[var(--label-txt-clr)] block font-semibold mb-2">
    Preferred Pronouns
  </label>
  <div className="flex flex-col md:flex-row gap-3">
    <div className="flex-1">
      <input
        id="preferredPronouns"
        name="preferredPronouns"
        className="w-full h-16 p-3 border border-[var(--input-bdr-clr)] rounded-md bg-[rgba(var(--input-bg-clr), var(--input-bg-opacity))] text-[var(--value-txt-clr)] focus:outline-none focus:border-[var(--input-focus-clr)]"
      />
      {actionData?.errors?.preferredPronouns && (
        <p className="text-[var(--error-txt-clr)]">{actionData.errors.preferredPronouns[0]}</p>
      )}
    </div>
  </div>
</li>

<li className="form-line">
  <label htmlFor="mailingAddress" className="text-[var(--label-txt-clr)] block font-semibold mb-2">
    Mailing Address
  </label>
  <div className="flex flex-col md:flex-row gap-3">
    <div className="flex-1">
      <input
        id="mailingAddress"
        name="mailingAddress"
        className={`w-full h-16 p-3 border ${
          actionData?.errors?.mailingAddress
            ? "border-[var(--error-txt-clr)]"
            : "border-[var(--input-bdr-clr)]"
        } rounded-md bg-[rgba(var(--input-bg-clr), var(--input-bg-opacity))] text-[var(--value-txt-clr)] focus:outline-none focus:border-[var(--input-focus-clr)]`}
      />
      {actionData?.errors?.mailingAddress && (
        <p className="text-[var(--error-txt-clr)]">{actionData.errors.mailingAddress[0]}</p>
      )}
    </div>
  </div>
</li>

<li className="form-line">
  <label htmlFor="emailAddress" className="text-[var(--label-txt-clr)] block font-semibold mb-2">
    Email Address
  </label>
  <div className="flex flex-col md:flex-row gap-3">
    <div className="flex-[0_1_49%]">
      <input
        id="emailAddress"
        name="emailAddress"
        className={`w-full p-3 border ${
          actionData?.errors?.emailAddress
            ? "border-[var(--error-txt-clr)]"
            : "border-[var(--input-bdr-clr)]"
        } rounded-md bg-[rgba(var(--input-bg-clr), var(--input-bg-opacity))] text-[var(--value-txt-clr)] focus:outline-none focus:border-[var(--input-focus-clr)]`}
      />
      {actionData?.errors?.emailAddress ? (
        <p className="text-[var(--error-txt-clr)]">{actionData.errors.emailAddress[0]}</p>
      ):(<label htmlFor="emailAddress" className="text-[var(--label-txt-clr)] font-light text-xs" >example@example.com</label>)}
    </div>
  </div>
</li>
<li className="form-line">
  <label htmlFor="phoneNumber" className="text-[var(--label-txt-clr)] block font-semibold mb-2">
    Phone Number
  </label>
  <div className="flex flex-col md:flex-row gap-3">
    <div className="flex-1">
    <TelephoneInput
      id="phoneNumber"
      name="phoneNumber"
      placeholder="(123) 456-7890"
      className={`w-full p-3 border ${
        actionData?.errors?.phoneNumber
          ? "border-[var(--error-txt-clr)]"
          : "border-[var(--input-bdr-clr)]"
      } rounded-md bg-[rgba(var(--input-bg-clr), var(--input-bg-opacity))] text-[var(--value-txt-clr)] focus:outline-none focus:border-[var(--input-focus-clr)]`}
        />
      {/* <input
        id="phoneNumber"
        name="phoneNumber"
        className={`w-full p-3 border ${
          actionData?.errors?.phoneNumber
            ? "border-[var(--error-txt-clr)]"
            : "border-[var(--input-bdr-clr)]"
        } rounded-md bg-[rgba(var(--input-bg-clr), var(--input-bg-opacity))] text-[var(--value-txt-clr)] focus:outline-none focus:border-[var(--input-focus-clr)]`}
      /> */}
      {actionData?.errors?.phoneNumber && (
        <p className="text-[var(--error-txt-clr)] mt-1">{actionData.errors.phoneNumber[0]}</p>
      )}
    </div>
  </div>
</li>

<li className="form-line">
  <label htmlFor="category" className="text-[var(--label-txt-clr)] block font-semibold mb-2">
    Category
  </label>
  <div className="flex flex-col md:flex-row gap-3">
    <div className="flex-1">
      <select
        id="category"
        name="category"
        className={`w-full p-3 border ${
          actionData?.errors?.category
            ? "border-[var(--error-txt-clr)]"
            : "border-[var(--input-bdr-clr)]"
        } rounded-md bg-[rgba(var(--input-bg-clr), var(--input-bg-opacity))] text-[var(--value-txt-clr)] focus:outline-none focus:border-[var(--input-focus-clr)]`}
      >
        <option value="">Please Select</option>
        <option value="Art">Art</option>
        <option value="Ceramics">Ceramics</option>
        <option value="Clothing and Accessories">Clothing and Accessories</option>
        <option value="Food & Beverage">Food & Beverage</option>
        <option value="Housewares">Housewares</option>
        <option value="Jewelry">Jewelry</option>
        <option value="Kids">Kids</option>
        <option value="Skincare + Apothecary">Skincare + Apothecary</option>
        <option value="Small Shop">Small Shop</option>
        <option value="Vintage">Vintage</option>
      </select>
      {actionData?.errors?.category && (
        <p className="text-[var(--error-txt-clr)] mt-1">{actionData.errors.category[0]}</p>
      )}
    </div>
  </div>
</li>

<li className="form-line">
  <label htmlFor="website" className="text-[var(--label-txt-clr)] block font-semibold mb-2">
    Website
  </label>
  <div className="flex flex-col md:flex-row gap-3">
    <div className="flex-1">
      <input
        id="website"
        name="website"
        placeholder="https://"
        className={`w-full p-3 border ${
          actionData?.errors?.website
            ? "border-[var(--error-txt-clr)]"
            : "border-[var(--input-bdr-clr)]"
        } rounded-md bg-[rgba(var(--input-bg-clr), var(--input-bg-opacity))] text-[var(--value-txt-clr)] focus:outline-none focus:border-[var(--input-focus-clr)]`}
      />
      {actionData?.errors?.website && (
        <p className="text-[var(--error-txt-clr)] mt-1">{actionData.errors.website[0]}</p>
      )}
    </div>
  </div>
</li>

<li className="form-line">
  <label htmlFor="igHandle" className="text-[var(--label-txt-clr)] block font-semibold mb-2">
    Instagram Handle
  </label>
  <div className="flex flex-col md:flex-row gap-3">
    <div className="flex-1">
      <input
        id="igHandle"
        name="igHandle"
        className={`w-full p-3 border ${
          actionData?.errors?.igHandle
            ? "border-[var(--error-txt-clr)]"
            : "border-[var(--input-bdr-clr)]"
        } rounded-md bg-[rgba(var(--input-bg-clr), var(--input-bg-opacity))] text-[var(--value-txt-clr)] focus:outline-none focus:border-[var(--input-focus-clr)]`}
      />
      {actionData?.errors?.igHandle && (
        <p className="text-[var(--error-txt-clr)] mt-1">{actionData.errors.igHandle[0]}</p>
      )}
    </div>
  </div>
</li>

<li className="form-line checked-border">
  <label htmlFor="Choose your Space" className="text-[var(--label-txt-clr)] block font-semibold mb-2">
  Choose your Space
  </label>
  <div className="flex flex-col  gap-3 flex-wrap">
    
    <label className="mt-2 p-2">
      <input type="radio" name="chooseYourSpace" value="3 days 6ft x 4ft (no table included) $440 +gst" />
      <span className="pl-2 text-red-50 text-sm font-mono" >3 days 6ft x 4ft (no table included) $440 +gst</span>
    </label>

    <label className="mt-2 p-2">
      <input type="radio" name="chooseYourSpace" value="3 days 10ft x 6ft (no table included) $495 +gst" />
      <span className="pl-2 text-red-50 text-sm font-mono" >3 days 10ft x 6ft (no table included) $495 +gst</span>
    </label>

    <label className="mt-2 p-2">
      <input type="radio" name="chooseYourSpace" value="3 days 10ft x 10ft (no table included) $550 +gst" />
      <span className="pl-2 text-red-50 text-sm font-mono" >3 days 10ft x 10ft (no table included) $550 +gst</span>
    </label>

    <label className="mt-2 p-2">
      <input type="radio" name="chooseYourSpace" value="3 days food truck $275 +gst" />
      <span className="pl-2 text-red-50 text-sm font-mono" >3 days food truck $275 +gst</span>
    </label>
      {actionData?.errors?.chooseYourSpace && (
        <p className="text-[var(--error-txt-clr)] mt-1">{actionData.errors.chooseYourSpace[0]}</p>
      )}
   
  </div>
</li>

<li className="form-line">
  <label htmlFor="firstTime" className="text-[var(--label-txt-clr)] block font-semibold mb-2">
  Is this the first time applying to SEEK CHURI Market?*
  </label>
  <div className="flex flex-col md:flex-row gap-3">
    <div className="flex-1">
      <textarea
        id="firstTime"
        name="firstTime"
        className={`w-full p-3 border ${
          actionData?.errors?.firstTime
            ? "border-[var(--error-txt-clr)]"
            : "border-[var(--input-bdr-clr)]"
        } rounded-md bg-[rgba(var(--input-bg-clr), var(--input-bg-opacity))] text-[var(--value-txt-clr)] focus:outline-none focus:border-[var(--input-focus-clr)]`}
      />
      {actionData?.errors?.firstTime && (
        <p className="text-[var(--error-txt-clr)] mt-1">{actionData.errors.firstTime[0]}</p>
      )}
    </div>
  </div>
</li>

<li className="form-line">
  <label htmlFor="amazingExperience" className="text-[var(--label-txt-clr)] block font-semibold mb-2">
  What would make this market an amazing experience for you?*
  </label>
  <div className="flex flex-col md:flex-row gap-3">
    <div className="flex-1">
      <textarea
        id="firsttimeapplying"
        name="firsttimeapplying"
        className={`w-full p-3 border ${
          actionData?.errors?.amazingExperience
            ? "border-[var(--error-txt-clr)]"
            : "border-[var(--input-bdr-clr)]"
        } rounded-md bg-[rgba(var(--input-bg-clr), var(--input-bg-opacity))] text-[var(--value-txt-clr)] focus:outline-none focus:border-[var(--input-focus-clr)]`}
      />
      {actionData?.errors?.amazingExperience && (
        <p className="text-[var(--error-txt-clr)] mt-1">{actionData.errors.amazingExperience[0]}</p>
      )}
    </div>
  </div>
</li>

<li className="form-line">
  <label htmlFor="otherMarkets" className="text-[var(--label-txt-clr)] block font-semibold mb-2">
  Are you participating in other markets?*
  </label>
  <div className="flex flex-col md:flex-row gap-3">
    <div className="flex-1">
      <textarea
        id="otherMarkets"
        name="otherMarkets"
        className={`w-full p-3 border ${
          actionData?.errors?.otherMarkets
            ? "border-[var(--error-txt-clr)]"
            : "border-[var(--input-bdr-clr)]"
        } rounded-md bg-[rgba(var(--input-bg-clr), var(--input-bg-opacity))] text-[var(--value-txt-clr)] focus:outline-none focus:border-[var(--input-focus-clr)]`}
      />
      {actionData?.errors?.otherMarkets && (
        <p className="text-[var(--error-txt-clr)] mt-1">{actionData.errors.otherMarkets[0]}</p>
      )}
    </div>
  </div>
</li>
<li className="form-line">
  <label htmlFor="howDidYouHear" className="text-[var(--label-txt-clr)] block font-semibold mb-2">
  How did you hear about our market?*
  </label>
  <div className="flex flex-col md:flex-row gap-3">
    <div className="flex-1">
      <textarea
        id="howDidYouHear"
        name="howDidYouHear"
        className={`w-full p-3 border ${
          actionData?.errors?.howDidYouHear
            ? "border-[var(--error-txt-clr)]"
            : "border-[var(--input-bdr-clr)]"
        } rounded-md bg-[rgba(var(--input-bg-clr), var(--input-bg-opacity))] text-[var(--value-txt-clr)] focus:outline-none focus:border-[var(--input-focus-clr)]`}
      />
      {actionData?.errors?.howDidYouHear && (
        <p className="text-[var(--error-txt-clr)] mt-1">{actionData.errors.howDidYouHear[0]}</p>
      )}
    </div>
  </div>
</li>
<li className="form-line">
  <label htmlFor="whyJoin" className="text-[var(--label-txt-clr)] block font-semibold mb-2">
  Why do you want to be part of the SEEK CHURI community?*
  </label>
  <div className="flex flex-col md:flex-row gap-3">
    <div className="flex-1">
      <textarea
        id="whyJoin"
        name="whyJoin"
        className={`w-full p-3 border ${
          actionData?.errors?.whyJoin
            ? "border-[var(--error-txt-clr)]"
            : "border-[var(--input-bdr-clr)]"
        } rounded-md bg-[rgba(var(--input-bg-clr), var(--input-bg-opacity))] text-[var(--value-txt-clr)] focus:outline-none focus:border-[var(--input-focus-clr)]`}
      />
      {actionData?.errors?.whyJoin && (
        <p className="text-[var(--error-txt-clr)] mt-1">{actionData.errors.whyJoin[0]}</p>
      )}
    </div>
  </div>
</li>
<li className="form-line">
  <label htmlFor="payIn72Hours" className="text-[var(--label-txt-clr)] block font-semibold mb-2">
  Will you be able to pay for your vendor booth within 72 hours of being accepted?*
  </label>
  <div className="flex flex-col md:flex-row gap-3">
    <div className="flex-1">
      <textarea
        id="firsttimeapplying"
        name="firsttimeapplying"
        className={`w-full p-3 border ${
          actionData?.errors?.payIn72Hours
            ? "border-[var(--error-txt-clr)]"
            : "border-[var(--input-bdr-clr)]"
        } rounded-md bg-[rgba(var(--input-bg-clr), var(--input-bg-opacity))] text-[var(--value-txt-clr)] focus:outline-none focus:border-[var(--input-focus-clr)]`}
      />
      {actionData?.errors?.payIn72Hours && (
        <p className="text-[var(--error-txt-clr)] mt-1">{actionData.errors.payIn72Hours[0]}</p>
      )}
    </div>
  </div>
</li>
<li className="form-line">
  <label htmlFor="bipoc" className="text-[var(--label-txt-clr)] block font-semibold mb-2">
  Do you identify as BIPOC? Our market platform is dedicated to hosting creative entrepreneurs who are Black, Indigenous and people of colour ensuring we have fair representation within our lineup.
  </label>
  <div className="flex flex-col md:flex-row gap-3">
    <div className="flex-1">
      <textarea
        id="bipoc"
        name="bipoc"
        className={`w-full p-3 border ${
          actionData?.errors?.bipoc
            ? "border-[var(--error-txt-clr)]"
            : "border-[var(--input-bdr-clr)]"
        } rounded-md bg-[rgba(var(--input-bg-clr), var(--input-bg-opacity))] text-[var(--value-txt-clr)] focus:outline-none focus:border-[var(--input-focus-clr)]`}
      />
      {actionData?.errors?.bipoc && (
        <p className="text-[var(--error-txt-clr)] mt-1">{actionData.errors.bipoc[0]}</p>
      )}
    </div>
  </div>
</li>
<li className="form-line">
  <label htmlFor="lgbtqia" className="text-[var(--label-txt-clr)] block font-semibold mb-2">
  Do you identify as 2SLGBTQIA+? Our market platform is dedicated to hosting creative entrepreneurs who are part of the 2SLGBTQIA+ community ensuring fair representation within our lineup
  </label>
  <div className="flex flex-col md:flex-row gap-3">
    <div className="flex-1">
      <textarea
        id="lgbtqia"
        name="lgbtqia"
        className={`w-full p-3 border ${
          actionData?.errors?.igHandle
            ? "border-[var(--error-txt-clr)]"
            : "border-[var(--input-bdr-clr)]"
        } rounded-md bg-[rgba(var(--input-bg-clr), var(--input-bg-opacity))] text-[var(--value-txt-clr)] focus:outline-none focus:border-[var(--input-focus-clr)]`}
      />
      {actionData?.errors?.lgbtqia && (
        <p className="text-[var(--error-txt-clr)] mt-1">{actionData.errors.lgbtqia[0]}</p>
      )}
    </div>
  </div>
</li>

<li className="form-line checked-border">
  <label htmlFor="Choose your Space" className="text-[var(--label-txt-clr)] block font-semibold mb-2">
  Are you a new emerging small business that is less than a year old? We have reserved three spaces for this market at a special rate for a new, emerging business (please note: not everyone who is interested will receive one of these spaces and will be subject to market acceptance). This is only open to first-time vendors to Bespoke Market.

  </label>
  <div className="flex flex-col flex-wrap">
    
    <label className="mt-2 p-2">
      <input type="checkbox" name="chooseYourSpace" value="3 days 6ft x 4ft (no table included) $440 +gst" />
      <span className="pl-2 text-red-50 text-sm font-mono" >Interested!</span>
    </label>

    <label className="mt-2 p-2">
      <input type="checkbox" name="chooseYourSpace" value="3 days 10ft x 6ft (no table included) $495 +gst" />
      <span className="pl-2 text-red-50 text-sm font-mono" >My business has been operating for over 1 year.</span>
    </label>

   
  </div>
</li>
<div className="notes mt-2 mb-2 bg-white p-3 rounded-lg">
  <p className="text-wrap text-md  text-black">
  <span className="underline font-bold">Please Note:</span> Gift bags will be handed out to shoppers on the Friday of our event. This is for our Early Access Ticket holders who will attend the event from 4pm-5pm. Vendors are asked to contribute up to 25 items towards the bags. We will collect your items onsite on Friday afternoon during the set up times. These bags are a great way to promote your business through offering sample-sized or branded products. There will also be prizing opportunities as well.
  </p>
</div>
<li className="form-line checked-border">
<label htmlFor="terms" className="mt-2 p-2">
      <input type="checkbox" name="terms" value="3 days 6ft x 4ft (no table included) $440 +gst" />
      <span className="pl-2 text-red-50 text-sm font-mono" >I have read and agree to the Bespoke Market <a href="/" className="underline text-white-500 ">Terms & Conditions</a>
      </span>
    </label>
</li>
<div className="flex justify-center pt-4 pb-4 w-full">

       
<button className=" text-lg bg-red-500 text-white px-8 py-2 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50" type="submit">Submit</button>
</div>
        </ul>
       
      </Form>
      </div>
      </div>
      </>
    );
  }