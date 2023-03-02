import Link from 'next/link'
import { useForm, SubmitHandler } from "react-hook-form";
import { api } from "../utils/api";

type Inputs = {
  typeId: string;
};

const TypeRadio = ({id}: IType) => {
	const { data: typeData } = api.auth.getUserType.useQuery({ id: id as string ?? "" }, {
		enabled: !!id
	});
	const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>({
		defaultValues: {
			typeId: ""
		}
	});
  return(
		<label>
			<input
				{...register("typeId", { required: "Bagian ini wajib diisi." })}
				type="radio"
				value={typeData?.id}
				id={id}
			/>
			{typeData?.name}
		</label>
  )
}

export default TypeRadio;