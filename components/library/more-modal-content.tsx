import React from 'react';
import {ModalActionItem} from '../tracks/modal-action-item';

export const MoreModalContent: React.FC<{
  instanceofTrack: boolean;
  userTrackModal: boolean;
}> = ({instanceofTrack, userTrackModal}) => {
  let content: any;

  if (instanceofTrack) {
    content = (
      <>
        <ModalActionItem iconName="heart-outline" title="Like" />
        <ModalActionItem
          iconName="ios-remove-circle-outline"
          title="Hide song"
        />
        <ModalActionItem
          iconName="md-musical-notes-outline"
          title="Add to playlist"
        />
        <ModalActionItem title="Add to queue" iconName="list-outline" />
        <ModalActionItem iconName="share-outline" title="Share" />
        <ModalActionItem title="Go to radio" iconName="radio" />
        <ModalActionItem iconName="md-disc-outline" title="View album" />
        <ModalActionItem iconName="person-outline" title="View artist" />
        <ModalActionItem
          iconName="md-person-add-outline"
          title="Song credits"
        />
      </>
    );
  } else {
    if (userTrackModal) {
      content = (
        <>
          <ModalActionItem iconName="heart-outline" title="Add song" />
          <ModalActionItem title="Download" iconName="download-outline" />
          <ModalActionItem title="Edit" iconName="pencil-outline" />
          <ModalActionItem
            title="Make private"
            iconName="lock-closed-outline"
          />
          <ModalActionItem
            title="Remove from profile"
            iconName="person-remove-outline"
          />
          <ModalActionItem
            iconName="remove-circle-outline"
            title="Delete playlist"
            onPress={() => null}
          />
          <ModalActionItem title="Add to queue" iconName="list-outline" />
          <ModalActionItem iconName="share-outline" title="Share" />
          <ModalActionItem title="Go to radio" iconName="radio" />
        </>
      );
    } else {
      content = (
        <>
          <ModalActionItem iconName="heart-outline" title="Like" />
          <ModalActionItem title="Download" iconName="download-outline" />
          <ModalActionItem title="Add to queue" iconName="list-outline" />
          <ModalActionItem iconName="share-outline" title="Share" />
          <ModalActionItem title="Go to radio" iconName="radio" />
          <ModalActionItem
            title="About recommendations"
            iconName="help-circle-outline"
          />
        </>
      );
    }
  }

  return content;
};
