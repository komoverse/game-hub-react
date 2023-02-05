import React from 'react'
import { SectionWrapper, SectionWrapperCard } from '@/utils/globalVariable'
import { t } from "i18next";
import { SectionTitle } from '@/components/index';

const TopPlayers = () => {
  return (
    <SectionWrapper>
      <SectionWrapperCard>
        <SectionTitle title={t('game.reviews')} />
      </SectionWrapperCard>
    </SectionWrapper>
  )
}

export default TopPlayers