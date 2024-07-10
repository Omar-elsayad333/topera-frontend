'use client'

import { IConversationMessages } from '@/types/pages/chat'
import { Avatar, Stack, SxProps, Typography, Box } from '@mui/material'
import Image from 'next/image'
import { ESender } from '@/types/enums'
import AvatarLogo from '@/assets/images/avatar_logo.svg'
import { uiAvatar } from '@/utils'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'

interface IChatSectionCardComponentProps {
  conversationMessages: IConversationMessages | null
}

const ChatSectionCardComponent = ({ conversationMessages }: IChatSectionCardComponentProps) => {
  const cardStyle: SxProps = {
    p: '15px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '20px',
  }

  const codeBlockStyle: SxProps = {
    position: 'relative',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: '10px',
    pt: 2, // Padding top only
  }

  return (
    <>
      {conversationMessages?.messages?.map((message) => (
        <Stack key={message.id} direction={'row'} gap={2} sx={cardStyle}>
          {message.sender === ESender.User ? (
            <Avatar
              src={uiAvatar(conversationMessages.userName)} // Assuming `userName` is available in `message`
              alt={conversationMessages.userName}
              sx={{ width: 40, height: 40 }}
            />
          ) : (
            <Image src={AvatarLogo} alt={'Topera'} width={40} height={40} />
          )}
          <Stack gap={1} sx={{ color: 'white' }}>
            <Typography fontWeight={600}>
              {message.sender === ESender.User ? conversationMessages.userName : 'Topera'}{' '}
            </Typography>
            {/* <Typography fontWeight={400}>{message.content}</Typography> */}
            <ReactMarkdown
              components={{
                code({ node, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '')
                  return match ? (
                    <Box sx={codeBlockStyle}>
                      <Stack sx={{ pl: '8px' }}>
                        <Typography variant="caption" color="textSecondary" sx={{ mb: 1 }}>
                          {match[1]}
                        </Typography>
                        <CopyToClipboard text={String(children).replace(/\n$/, '')}>
                          <ContentCopyIcon
                            sx={{
                              position: 'absolute',
                              top: '10px',
                              right: '10px',
                              cursor: 'pointer',
                              color: 'white',
                            }}
                          />
                        </CopyToClipboard>
                      </Stack>
                      <SyntaxHighlighter
                        style={{
                          ...vscDarkPlus,
                          'pre[class*="language-"]': { background: 'rgba(0, 0, 0, 0.8)', padding: '15px' },
                        }}
                        language={match[1]}
                      >
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    </Box>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  )
                },
              }}
            >
              {message.content}
            </ReactMarkdown>
          </Stack>
        </Stack>
      ))}
    </>
  )
}

export default ChatSectionCardComponent
