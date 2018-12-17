import React from 'react'
import Schedule from './Schedule'
import Entry from './Entry'
import { theme, breakpoint } from '@aragon/ui'
import styled from 'styled-components'

const medium = css => breakpoint('medium', css);

const ScheduleBox = styled.div`
  width: 100%;
  margin: 0;
  padding: 50px 0;
  ${medium('padding: 50px 8.5%;')};
  background: white;
  text-align: center;
`;

const DayTwo = () => (
  <ScheduleBox>
    <p><i>*All panels and talks will be happening on the main stage (“Kapelle” hall)</i></p>
    <Schedule>
      <Entry time="09:00 HS" title="Using Metamodels for Cross-blockchain Governance" subtitle="Will Warren"/>
      <Entry time="" title="Governing Decentralized Organizations" subtitle={(<span>Moderator: Alison Berreman <br/>Panelists: Constance Choi, Kenny Rowe, Mario Laul</span>)}/>
      <Entry time="" title="Open source sustainability" subtitle={(<span>Moderator: Luis Cuende <br/>Panelists: Taylor Monahan, Yondon Fu, Olivier Sarrouy</span>)}/>
      <Entry time="" title="A history of decentralized thought" subtitle="Daniel Shavit"/>
      <Entry time="" title="Coffee Break (15min)" subtitle=""/>
      <Entry time="" title="Aragon One in 2019" subtitle="Brett Sun"/>
      <Entry time="" title="DAOs And Their Interaction With The Physical World" subtitle="Primavera De Filippi & Maria Gomez"/>
      <Entry time="" title="Pando (Nest team)" subtitle="Olivier Sarrouy"/>
      <Entry time="" title="Identity in DAOs" subtitle={(<span>Moderator: John Light <br/>Panelists: Jordi Baylina, Adam Stallard, Oliver Terbu</span>)}/>
      <Entry time="" title="Lunch (1 hour)" subtitle=""/>
      <Entry time="" title="Nest Program Demos" subtitle="BrightID, First State Fintech Lab, TennaGraph, Decentralized Design Lab"/>
      <Entry time="" title="Recruiting For A Diverse Web3" subtitle={(<span>Moderator: Monica Zeng <br/>Panelists: Raine Revere, Sara Reynolds, Samer Hassan, Taylor Monahan</span>)}/>
      <Entry time="" title="The Consequences of Oppression" subtitle="Moises Rendon"/>
      <Entry time="" title="The Theory of the Crypto Firm" subtitle="Meltem Demirors"/>
      <Entry time="" title="Coffee Break (30min)" subtitle=""/>
      <Entry time="" title="TheDAO - From the Author's Perspective" subtitle="Christoph Jentzsch"/>
      <Entry time="" title="Current State of Token Curated Registries" subtitle={(<span>Moderator: Luke Duncan <br/>Panelists: Matt Lockyer, Trent McConaughy, Joe Urgo, Jeff Emmett</span>)}/>
      <Entry time="" title="Closing Keynote" subtitle="Luis Cuende"/>
    </Schedule>
  </ScheduleBox>
);

export default DayTwo