import { phones } from '@/assets/deneme';
function getProduct(id) {
  return phones.find(phone => phone.id === id);
}
export default getProduct;
