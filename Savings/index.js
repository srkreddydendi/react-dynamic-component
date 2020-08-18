import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectSavingsType from './SelectSavingsType';
import SelectInterestRate, { MIN_RATE, MAX_RATE } from './SelectInterestRate';
import AgeSelect, { MIN_AGE, MAX_AGE } from '../shared/AgeSelect';
import TotalValueInput, { MIN_TOTALVALUE, MAX_TOTALVALUE } from '../shared/TotalValueInput';
import Button from '../shared/Button';
import HuhButton from '../shared/HuhButton';
import content from './Savings.json';
import buttonContent from '../shared/Button/Button.json';
import './Savings.scss';

export default class Savings extends Component {
    static get boundFunctions() {
        return [
            'inputChangeHandler',
            'validateForm',
            'setIsFormValid'
        ];
    }

    constructor() {
        super();

        this.state = {
						isFormValid: false,
						savingsType: '',
						interestRate: 0,
            receiveAge: 0,
            totalValue: 0
        };

        this.constructor.boundFunctions.forEach((fn) => this[fn] = this[fn].bind(this));
    }

    inputChangeHandler(event) {
        const {
            id,
            value
				} = event.target;

				let inputValue;
				if (id === 'savingsType') { inputValue = String(value); }
				else { inputValue = Number(value); }

        this.setState({
            [id]: inputValue
        }, () => {
            this.setIsFormValid();
        });
    }

    validateForm() {
        const {
						interestRate,
						receiveAge,
            totalValue
        } = this.state;

        if ((interestRate < MIN_RATE || interestRate > MAX_RATE)) { return false; }
        if (receiveAge === 0 || (receiveAge < MIN_AGE || receiveAge > MAX_AGE)) { return false; }
        if (totalValue === 0 || (totalValue < MIN_TOTALVALUE || totalValue > MAX_TOTALVALUE)) { return false; }

        return true;
    }

    setIsFormValid() {
        this.setState({ isFormValid: this.validateForm() });
    }

    render() {
        const {
            onAddEvent,
            onCancel
        } = this.props;

        const {
						isFormValid,
						savingsType,
						interestRate,
            receiveAge,
            totalValue,
				} = this.state;

				const strings = content;
				const buttonStrings = buttonContent;

        return (
            <div className="add-savings">
								<header>
									<h3>{strings.title}</h3>
									<HuhButton/>
								</header>
                <div className="inputs">
										<SelectSavingsType id="savingsType"
											value={savingsType}
											onChange={this.inputChangeHandler}
											label={strings.SelectSavingsType.label}
											placeholder={strings.SelectSavingsType.action}/>

										<SelectInterestRate id="interestRate"
											value={interestRate}
											onChange={this.inputChangeHandler}
											label={strings.SelectInterestRate.label}
											placeholder={strings.SelectInterestRate.action}/>

										<AgeSelect id="receiveAge"
											value={receiveAge}
											onChange={this.inputChangeHandler}
											label={strings.AgeSelect.label}
											placeholder={strings.AgeSelect.action}/>

										<span>{strings.TotalValueInput.title}</span>
										<p>{strings.TotalValueInput.explain}</p>
										<TotalValueInput className="input--per-month"
											id="totalValue"
											value={totalValue}
											onChange={this.inputChangeHandler}/>
                </div>
                <div className="controls">
										<Button text={buttonStrings.add_this_event}
											className="btn--dark-bg btn--auto-width"
											onClick={onAddEvent}
											disabled={!isFormValid}/>

										<Button text={buttonStrings.cancel}
											onClick={onCancel}/>
                </div>
            </div>
        );
    }
}

Savings.propTypes = {
    /**
     * Event listener for submitting the form
     */
    onAddEvent: PropTypes.func.isRequired,
    /**
     * Event listener for canceling the form
     */
    onCancel: PropTypes.func.isRequired
}

Savings.defaultProps = {
    onAddEvent: () => null,
    onCancel: () => null
}