import { useState } from "react";
import Title from "../../components/ui/Title";
import { IoMdClose } from "react-icons/io";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { useNavigate } from "react-router-dom";

interface IRegisterPayload {
  username: string;
  email: string;
  password: string;
}

export default function SignUpPage() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showResponseMessage, setShowResponseMessage] =
    useState<boolean>(false);
  const [responseMessage, setResponseMessage] = useState<string>("");
  const [responseStatus, setResponseStatus] = useState<boolean>(false);

  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const payload: IRegisterPayload = {
      username: username,
      email: email,
      password: password,
    };

    try {
      const response = await fetch(
        "https://binar-car-rental-api-bayu.fly.dev/api/v1/auth",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();
      if ((await data.meta.code) !== 201) {
        setResponseStatus(false);
        setResponseMessage(data.data);
      } else {
        setResponseStatus(true);
        setResponseMessage(
          "Account successfully created! Redirecting to Sign In Page..."
        );
        setTimeout(() => {
          navigate("/auth/sign-in");
        }, 1000);
      }
      setShowResponseMessage(true);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Title title="Sign Up" sx={["font-medium"]} />
      <form className="space-y-3" onSubmit={handleSubmit}>
        <p>
          Name<span className="text-red-400">*</span>
        </p>
        <input
          className="p-2 px-4 w-full focus:outline-none border rounded-md"
          type="text"
          placeholder="Nama Lengkap"
          autoCapitalize="words"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <p>
          Email<span className="text-red-400">*</span>
        </p>
        <input
          className="p-2 px-4 w-full focus:outline-none border rounded-md"
          type="email"
          placeholder="johndoe@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <p>
          Password<span className="text-red-400">*</span>
        </p>
        <div className="flex items-center p-2 px-4 border rounded-mdborder rounded-md space-x-3">
          <input
            className="w-full focus:outline-none"
            type={showPassword ? "text" : "password"}
            placeholder="6+ karakter"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {showPassword ? (
            <MdOutlineVisibilityOff
              onClick={() => setShowPassword(!showPassword)}
              className="text-xl hover:cursor-pointer"
            />
          ) : (
            <MdOutlineVisibility
              onClick={() => setShowPassword(!showPassword)}
              className="text-xl hover:cursor-pointer"
            />
          )}
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className={`bg-biru p-2 text-white w-full rounded-sm ${
            isLoading && "bg-gray-400"
          }`}
        >
          {isLoading ? "Loading..." : "Sign Up"}
        </button>
      </form>
      <p>
        Already have an account?{" "}
        <a href="/auth/sign-in" className="font-bold text-biru underline">
          Sign In here
        </a>
      </p>
      <div
        className={`flex p-4 shadow-md border space-x-3 items-center absolute top-0 right-0 left-0 ${
          responseStatus ? "bg-green-200" : "bg-red-200"
        } ${!showResponseMessage && "hidden"} `}
      >
        <p className="flex-grow">{responseMessage}</p>
        <IoMdClose
          className="hover:cursor-pointer"
          onClick={() => setShowResponseMessage(false)}
        />
      </div>
    </>
  );
}
