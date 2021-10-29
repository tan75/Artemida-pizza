import CheckboxItem from '../CheckboxItem';

const checkboxItemsIds = ['Odd5HuC4', 'xXibhlsf', 'zPVQ1E4O'];

export default function CheckboxItems() {
  return (
    <>
      {checkboxItemsIds.map((itemId) => (
        <CheckboxItem id={itemId} />
      ))}
    </>
  );
}
