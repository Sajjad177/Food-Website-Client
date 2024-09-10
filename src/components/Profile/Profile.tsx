import {
  Loader2,
  Mail,
  MapPin,
  MapPinHouse,
  MapPinned,
  Plus,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { FormEvent, useRef, useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    country: "",
    profilePic: "",
  });
  const imageRef = useRef<HTMLInputElement | null>(null);
  const [selectedProfile, setSelectedProfile] = useState<string>("");

  const loading = false;

  const fileChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setSelectedProfile(result);
        setProfileData((prevData) => ({
          ...prevData,
          profilePic: result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const updateProfileHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(profileData);
    // update profile api implementation
  };

  return (
    <form onSubmit={updateProfileHandler} className="max-w-7xl mx-auto my-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar className="relative md:w-28 md:h-28 w-20 h-20">
            {/* AvatarImage to display selected profile image */}
            {selectedProfile ? (
              <AvatarImage src={selectedProfile} />
            ) : (
              <AvatarFallback>Pic</AvatarFallback>
            )}

            {/* File Input Hidden */}
            <input
              ref={imageRef}
              className="hidden"
              type="file"
              accept="image/*"
              onChange={fileChangeHandler}
            />

            {/* Overlay for File Upload */}
            <label
              onClick={() => imageRef.current?.click()}
              className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-full cursor-pointer"
            >
              <Plus className="text-white w-8 h-8" />
            </label>
          </Avatar>
          <Input
            type="text"
            name={profileData.fullName}
            onChange={changeHandler}
            className="font-bold text-2xl border-none outline-none focus-visible:ring-transparent"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-4 md:gap-2 gap-3 my-10">
        <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200">
          <Mail className="text-gray-500" />
          <div className="w-full">
            <Label>Email</Label>
            <input
              name="email"
              value={profileData.email}
              onChange={changeHandler}
              className="w-full text-gray-600 bg-transparent focus-visible:ring-0 focus-visible:border-transparent outline-none border-none"
            />
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200">
          <MapPinHouse className="text-gray-500" />
          <div className="w-full">
            <Label>Address</Label>
            <input
              name="address"
              value={profileData.address}
              onChange={changeHandler}
              className="w-full text-gray-600 bg-transparent focus-visible:ring-0 focus-visible:border-transparent outline-none border-none"
            />
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200">
          <MapPin className="text-gray-500" />
          <div className="w-full">
            <Label>City</Label>
            <input
              name="city"
              value={profileData.city}
              onChange={changeHandler}
              className="w-full text-gray-600 bg-transparent focus-visible:ring-0 focus-visible:border-transparent outline-none border-none"
            />
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200">
          <MapPinned className="text-gray-500" />
          <div className="w-full">
            <Label>Country</Label>
            <input
              name="country"
              value={profileData.country}
              onChange={changeHandler}
              className="w-full text-gray-600 bg-transparent focus-visible:ring-0 focus-visible:border-transparent outline-none border-none"
            />
          </div>
        </div>
      </div>
      <div className="text-center">
        {loading ? (
          <Button
            disabled
            className="bg-indigo-600 text-white w-full py-2 rounded-md flex justify-center items-center"
          >
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Please Wait
          </Button>
        ) : (
          <Button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white w-full py-2 rounded-md transition-all"
          >
            Update
          </Button>
        )}
      </div>
    </form>
  );
};

export default Profile;
