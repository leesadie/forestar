'use client';

import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

import useLoginModal from "../../hooks/useLoginModal";
import useRegisterModal from "../../hooks/useRegisterModal";
import { SafeUser } from "@/app/types";

import MenuItem from "./MenuItem";
import Avatar from "../Avatar";
import useTrailModal from "../../hooks/useTrailModal";

interface UserMenuProps {
  currentUser?: SafeUser | null
  data?: SafeUser
  onAction?: (id: string) => void;
}

const UserMenu: React.FC<UserMenuProps> = ({
  currentUser,
  data,
  onAction
}) => {
  const router = useRouter();

  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const trailModal = useTrailModal();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return ( 
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div 
          onClick={() => router.push('/about')}
          className="
            hidden
            md:block
            text-sm 
            font-semibold 
            py-3 
            px-4 
            rounded-full 
            hover:bg-neutral-100
            transition 
            cursor-pointer
          "
        >
          Explore forest bathing
        </div>
        <div 
        onClick={toggleOpen}
        className="
          px-3
          py-2
          mr-4
          md:mr-0
          md:py-1
          md:px-2
          lg:p-2
          border-[1px] 
          border-neutral-200 
          flex 
          flex-row 
          items-center 
          gap-3 
          rounded-full 
          cursor-pointer 
          hover:shadow-md 
          transition
          "
        >
          <AiOutlineMenu />
          <div>
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div 
          className="
            absolute 
            rounded-lg 
            shadow-md
            w-[40vw]
            md:w-3/4 
            bg-white 
            overflow-hidden 
            right-3 
            top-12 
            text-sm
          "
        >
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem 
                  label="My profile" 
                  onClick={() => router.push('/profile')}
                />
                <MenuItem 
                  label="Explore" 
                  onClick={() => router.push('/about')}
                />
                <hr />
                <MenuItem 
                  label="Logout" 
                  onClick={() => signOut()}
                />
              </>
            ) : (
              <>
                <MenuItem 
                  label="Explore" 
                  onClick={() => router.push('/about')}
                />
                <hr />
                <MenuItem 
                  label="Login" 
                  onClick={loginModal.onOpen}
                />
                <MenuItem 
                  label="Sign up" 
                  onClick={registerModal.onOpen}
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
   );
}
 
export default UserMenu;