import React, { memo } from 'react';
import Link from 'next/link';
import { file } from '@/pages/types/list';
import './style.less';

type FileProps = {
  file: file
}
const File: React.FC<FileProps> = (props) => {
  const { file } = props;
  const { name, modifiedTime, id } = file;
  return (
    <Link href={`/article/${id}`}>
      <div className="file-wrapper">
        <span>{name}</span>
        <span>{modifiedTime}</span>
      </div>
    </Link>
  );
};

export default memo(File);
