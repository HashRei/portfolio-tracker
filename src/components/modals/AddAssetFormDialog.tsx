import {
  ChakraProvider,
  Modal,
  ModalOverlay,
  ModalContent,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface Inputs {
  nftName: string;
  nftDescription: string;
  nftPrice: number;
  nftFile: File;
}

export default function AddAssetFormDialog({
  openAction,
  closeAction,
}: {
  openAction: boolean;
  closeAction: () => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({});

  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  return (
    <div>
      <ChakraProvider>
        <Modal
          isOpen={openAction}
          onClose={closeAction}
          blockScrollOnMount={true}
        >
          <ModalOverlay
            bg="none"
            backdropFilter="auto"
            backdropInvert="30%"
            backdropBlur="2px"
          />
          <ModalContent className="p-8" style={{ padding: "1.5rem" }}>
            <form className="flex flex-col space-y-3 tablet:p-4 desktop:bg-slate-200 rounded-lg ">
              <input
                type="text"
                placeholder="Name of the asset"
                className="p-5 rounded"
                {...register("nftDescription", { maxLength: 200 })}
              />
              {errors?.nftDescription?.type === "maxLength" && (
                <p>Description cannot exceed 200 characters</p>
              )}

              <select
                id="assetClass"
                name="assetClass"
                defaultValue="chooseAssetClass"
              >
                <option value="chooseAssetClass" disabled>
                  Choose an asset class
                </option>
                <option value="gold">Gold</option>
                <option value="silver">Silver</option>
                <option value="stocks">Stocks</option>
                <option value="crypto">Crypto</option>
                <option value="realEstate">Real estate</option>
              </select>

              <input
                type="number"
                placeholder="Price of the asset"
                className="p-5 rounded"
                {...register("nftPrice", { required: true, min: 0.001 })}
              />
              {errors.nftPrice && <p>Price must be at least 1</p>}

              <input
                className=" text-lg"
                type="date"
                id="date"
                name="date"
                defaultValue={date}
              />
            </form>
            <Button />
          </ModalContent>
        </Modal>
      </ChakraProvider>
    </div>
  );
}

function Button({ ...rest }) {
  return (
    <button
      {...rest}
      type="submit"
      className="disabled:opacity-70  disabled:cursor-not-allowed px-10 py-3 border rounded-md text-base font-bold font-sans m-10 buttonColor text-white bg-gray-700 hover:bg-gray-900"
    >
      <p>Submit</p>
    </button>
  );
}
