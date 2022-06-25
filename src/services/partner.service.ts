import { v4 } from 'uuid'

import PartnerModel from '@models/partner.model'
import PartnerDTO from '@models/dto/partner.dto'
import setTranslate from '@utils/set-translate'

const store = async (data: PartnerDTO.Store) => {
  const title = setTranslate(data.title)
  const partner = await PartnerModel.create({
    id: v4(),
    title,
  })

  return partner.serialize('JSON')
}

const PartnerService = {
  Store: store,
}

export default PartnerService
