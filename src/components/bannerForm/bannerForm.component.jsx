import { ReactComponent as Search } from "../../assets/search.svg";
import { FormContainer, SubmitButton } from "./bannerForm.styles";

const BannerForm = () => {
  return (
    <FormContainer>
      <input type="text" placeholder="搜尋關鍵字" />
      <select>
        <option>類別</option>
        <option>美食</option>
        <option>住宿</option>
      </select>
      <select>
        <option>不分縣市</option>
        <option>不分縣市</option>
        <option>不分縣市</option>
        <option>不分縣市</option>
        <option>不分縣市</option>
        <option>不分縣市</option>
        <option>不分縣市</option>
        <option>不分縣市</option>
        <option>不分縣市</option>
        <option>不分縣市</option>
        <option>不分縣市</option>
        <option>不分縣市</option>
        <option>不分縣市</option>
        <option>不分縣市</option>
        <option>不分縣市</option>
        <option>不分縣市</option>
        <option>不分縣市</option>
        <option>不分縣市</option>
        <option>不分縣市</option>
        <option>不分縣市</option>
        <option>不分縣市</option>
      </select>
      <SubmitButton>
        <Search />
      </SubmitButton>
    </FormContainer>
  );
};

export default BannerForm;
