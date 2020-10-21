import React from 'react';
import PropTypes from 'prop-types';
import GuestLayout from './guest-layout';

export default () => {
  const [rate, setRate] = React.useState(5);
  const [weight, setWeight] = React.useState(75);

  const dripRate = rate * weight * 0.0125;

  return (
      <GuestLayout>
        <section className="hero is-medium is-info is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Dosage calculator
              </h1>
              <h2 className="subtitle">
                There are no limits for creativity
              </h2>
            </div>
          </div>
        </section>
        <section className="m-t-lg">
          <div className="container p-l-md p-r-md">
            <div className="field">
                <label className="label">Rate (mcg/kg/min)</label>
                <div className="control">
                    <input className="input" type="number" min={0} max={20} value={rate} onChange={e => setRate(e.target.value)} />
                </div>
            </div>

            <div className="field">
                <label className="label">Weight (kg)</label>
                <div className="control">
                    <input className="input" type="number" min={0} max={200} value={weight} onChange={e => setWeight(e.target.value)} />
                </div>
            </div>

            <div>
                Drip rate: {dripRate}
            </div>

            <div>
                500ml bag over: {83.3 / dripRate} hours
            </div>

          </div>
        </section>
      </GuestLayout>
    );
}
