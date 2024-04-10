import { supabase } from "./data";

export const fetchData = async() => {
    const { data: input_personal_info, error } = await supabase.from('input_personal_info').select();
    return input_personal_info;
}