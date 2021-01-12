import initComponentOnPage from '../components';
import ExpandableCheckboxList from './expandable-checkbox-list';

export default function initExpandableCheckboxListOnPage() {
    initComponentOnPage(ExpandableCheckboxList, '.js-expandable-checkbox-list');    
}