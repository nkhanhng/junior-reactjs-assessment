/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import { API_ENDPOINT } from 'constants/routes-constants';
import React from 'react';
import '../../style/index.css';

const StatsField = (props) => {
  const { title, data } = props;
  return (
    <div className="hero-stats-field">
      {title}
      {' '}
      {data}
    </div>
  );
};

const HeroDetail = (props) => {
  const {
    match: {
      params: { id },
    },
  } = props;
  const data = localStorage.getItem('data');
  const parseData = JSON.parse(data);
  const heroStats = parseData.find((hero) => hero.id === parseInt(id));
  const {
    img,
    localized_name,
    move_speed,
    roles,
    attack_range,
    attack_type,
    base_attack_min,
    base_armor,
    base_health,
    base_health_regen,
    base_mana,
    base_mana_regen,
    legs,
    cm_enabled,
    projectile_speed,
    base_mr,
    turn_rate,
  } = heroStats;

  return (
    <div>
      <div>
        <img src={`${API_ENDPOINT}${img}`} alt={localized_name} />
        <div>{localized_name}</div>
        <span>{attack_type}</span>
        <div>
          {roles.map((role) => (
            <span>
              {role}
              ,
            </span>
          ))}
        </div>
      </div>
      <div className="hero-stats">
        <div>
          <StatsField title="BASE ATTACK:" data={base_attack_min} />
          <StatsField title="ATTACK RANGE:" data={attack_range} />
          <StatsField title="HEALTH:" data={base_health} />
          <StatsField title="HEALTH REGEN:" data={base_health_regen} />
        </div>
        <div>
          <StatsField title="MANA:" data={base_mana} />
          <StatsField title="MANA REGEN:" data={base_mana_regen} />
          <StatsField title="BASE ARMOR:" data={base_armor} />
          <StatsField title="MAGIC RESISTANCE" data={base_mr} />
        </div>
        <div>
          <StatsField title="PROJECTILE SPEED:" data={projectile_speed} />
          <StatsField title="MOVE SPEED:" data={move_speed} />
          <StatsField title="TURN SPEED:" data={turn_rate} />
          <StatsField title="NUMBER OF LEGS:" data={legs} />
        </div>
        <div>
          <div className="hero-stats-field">
            CM ENABLED:
            {' '}
            {cm_enabled ? 'YES' : 'NO'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDetail;
