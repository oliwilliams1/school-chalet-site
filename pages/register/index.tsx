import { Header } from "@/layouts/head";
import Footer from "@/layouts/footer";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useRef, useState } from "react";
import { motion } from 'framer-motion';

export default function SignUpPage() {
  const fileInputRefAddress = useRef(null);
  const fileInputRefID = useRef(null);
  const [addressUploaded, setAddressUploaded] = useState(false);
  const [idUploaded, setIdUploaded] = useState(false);
  const [addressFileName, setAddressFileName] = useState('');
  const [idFileName, setIdFileName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [physicalAddress, setPhysicalAddress] = useState('');
  const [inputErrors, setInputErrors] = useState({
    firstName: false,
    lastName: false,
    physicalAddress: false,
    addressFile: false,
    idFile: false,
  });
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const notificationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const handleUploadClick = (ref : any) => {
    if (ref.current) {
      ref.current.click();
    }
  };

  const handleAddressChange = (e : any) => {
    if (e.target.files && e.target.files.length > 0) {
      setAddressUploaded(true);
      setAddressFileName(e.target.files[0].name);
    }
  };

  const handleIDChange = (e : any) => {
    if (e.target.files && e.target.files.length > 0) {
      setIdUploaded(true);
      setIdFileName(e.target.files[0].name);
    }
  };

  const handleRegister = () => {
    setInputErrors({
      firstName: false,
      lastName: false,
      physicalAddress: false,
      addressFile: false,
      idFile: false,
    });

    const errors = {
      firstName: firstName.trim() === '',
      lastName: lastName.trim() === '',
      physicalAddress: physicalAddress.trim() === '',
      addressFile: !addressUploaded,
      idFile: !idUploaded,
    };

    setInputErrors(errors);

    if (!errors.firstName && !errors.lastName && !errors.physicalAddress && !errors.addressFile && !errors.idFile) {
      localStorage.setItem("user", JSON.stringify({ firstName, lastName, physicalAddress }));
      setRegistrationSuccess(true);
      
      // Hide notification after 3 seconds
      setTimeout(() => {
          setRegistrationSuccess(false);
          window.history.back()
      }, 3000);
    }
  };

  return (
    <div>
      <Header />
      <div className="w-full h-screen bg-black">
        <video
          className="w-full h-full object-cover opacity-80"
          src="/resources/register/ski lift video - trim.mp4"
          autoPlay
          muted
          loop
          disablePictureInPicture
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-screen backdrop-blur-xl">
        {registrationSuccess && (
          <motion.div
            className="absolute bottom-4 ml-4 bg-green-300 rounded-lg shadow-lg p-4"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={notificationVariants}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl font-semibold text-white montserrat">Welcome Aboard!</h1>
            <h2 className="text-md text-white montserrat">Registration successfull, redirecting shortly</h2>
          </motion.div>
        )}
        <div className="max-w-[22rem] md:max-w-[28rem] w-full mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl p-8 shadow-lg bg-white dark:bg-black">
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 montserrat">Create Your Account</h2>
          <p className="mb-6 text-neutral-600 dark:text-neutral-400 montserrat">Please fill in the details below to become a member</p>

          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <div className="flex flex-col space-y-2 w-full">
              <Input
                type="text"
                label="First Name"
                labelPlacement="outside"
                placeholder="John"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                classNames={{
                  label: "text-black/50 dark:text-white/90 montserrat",
                  inputWrapper: `border-2 ${inputErrors.firstName ? 'border-red-500' : ''}`,
                }}
              />
            </div>
            <div className="flex flex-col space-y-2 w-full">
              <Input
                type="text"
                label="Last Name"
                labelPlacement="outside"
                placeholder="Doe"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                classNames={{
                  label: "text-black/50 dark:text-white/90 montserrat",
                  inputWrapper: `border-2 ${inputErrors.lastName ? 'border-red-500' : ''}`,
                }}
              />
            </div>
          </div>

          <div className="flex flex-col mb-4">
            <Input
              type="text"
              label="Physical Address"
              labelPlacement="outside"
              placeholder="123 Main St, City, Country"
              value={physicalAddress}
              onChange={(e) => setPhysicalAddress(e.target.value)}
              classNames={{
                label: "text-black/50 dark:text-white/90 montserrat",
                inputWrapper: `border-2 ${inputErrors.physicalAddress ? 'border-red-500' : ''}`,
              }}
            />
          </div>

          <div className="flex flex-col space-y-2 mb-6">
            <div className="flex flex-col">
              <p className="font-normal text-sm text-neutral-600 dark:text-neutral-400">Proof of Address</p>
              <Button
                className={`mt-1 p-3 border-2 rounded-lg transition duration-300 montserrat ${addressUploaded ? 'border-green-500' : (inputErrors.addressFile ? 'border-red-500' : 'bg-slate-100 hover:bg-slate-200')}`}
                onClick={() => handleUploadClick(fileInputRefAddress)}
              >
                {addressUploaded ? `Uploaded: ${addressFileName}` : 'Upload'}
              </Button>
              <input
                type="file"
                ref={fileInputRefAddress}
                style={{ display: 'none' }}
                accept="image/*"
                onChange={handleAddressChange}
              />
            </div>

            <div className="flex flex-col">
              <p className="font-normal text-sm text-neutral-600 dark:text-neutral-400">Proof of ID</p>
              <Button
                className={`mt-1 p-3 border-2 rounded-lg transition duration-300 montserrat ${idUploaded ? 'border-green-500' : (inputErrors.idFile ? 'border-red-500' : 'bg-slate-100 hover:bg-slate-200')}`}
                onClick={() => handleUploadClick(fileInputRefID)}
              >
                {idUploaded ? `Uploaded: ${idFileName}` : 'Upload'}
              </Button>
              <input
                type="file"
                ref={fileInputRefID}
                style={{ display: 'none' }}
                accept="image/*"
                onChange={handleIDChange}
              />
            </div>
          </div>

          <Button
            className="w-full mt-6 p-3 bg-green-200 montserrat rounded-lg hover:bg-green-300 transition duration-300"
            onClick={handleRegister}
          >Register</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}