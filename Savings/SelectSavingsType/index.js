import React from 'react';
import PropTypes from 'prop-types';

const TYPE_LIST = [
	'Cash ISA',
	'Stocks and shares ISA',
	'Savings account',
	'Current account',
	'other'
];

export default function SelectSavingsType({ id, value, onChange, label, placeholder }) {
    return (
        <label className="input-select">
            {value !== '' && <span className="label-filled">{label}</span>}
            <select id={id} className="input input--border-bottom" onChange={onChange} defaultValue={-1}>
                <option value="-1" className="hidden">{placeholder}</option>
                {TYPE_LIST.map((type) => <option key={type} value={type}>{type}</option>)}
            </select>
        </label>
    );
}

SelectSavingsType.propTypes = {
		/**
     * The select html id
     */
    id: PropTypes.string.isRequired,
    /**
     * A description of the type of savings held in an savings pot.
		 * This has implications for tax.
     */
    value: PropTypes.string.isRequired,
    /**
     * Event listener for updating the value
     */
		onChange: PropTypes.func.isRequired,
		/**
     * The select's label text
     */
		label: PropTypes.string,
		/**
     * The select placeholder text
     */
    placeholder: PropTypes.string
}

SelectSavingsType.defaultProps = {
		value: '',
		onChange: () => null
}