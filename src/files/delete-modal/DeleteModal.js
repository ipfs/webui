import React from 'react'
import PropTypes from 'prop-types'
import { translate } from 'react-i18next'
import TrashIcon from '../../icons/StrokeTrash'
import Button from '../../components/button/Button'
import { Modal, ModalActions, ModalBody } from '../../components/modal/Modal'

const DeleteModal = ({ t, tReady, onCancel, onDelete, folders, files, className, ...props }) => {
  let context = 'file'
  const count = files + folders

  if (folders > 0) {
    if (files > 0) {
      context = 'item'
    } else {
      context = 'folder'
    }
  }

  return (
    <Modal {...props} className={className} onCancel={onCancel} >
      <ModalBody title={t('deleteModal.title', { count, context })} icon={TrashIcon}>
        <p className='gray w-80 center'>
          {t('deleteModal.description', { count, context })}
        </p>
      </ModalBody>

      <ModalActions>
        <Button className='ma2' bg='bg-gray' onClick={onCancel}>{t('actions.cancel')}</Button>
        <Button className='ma2' bg='bg-red' onClick={onDelete}>{t('actions.delete')}</Button>
      </ModalActions>
    </Modal>
  )
}

DeleteModal.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  files: PropTypes.number,
  folders: PropTypes.number,
  t: PropTypes.func.isRequired,
  tReady: PropTypes.bool.isRequired
}

DeleteModal.defaultProps = {
  className: '',
  files: 0,
  folders: 0
}

export default translate('files')(DeleteModal)
