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

  const guide: string = `
Sure, I'd be happy to help! Here's a step-by-step guide on how to create a model, add it to a database, and create an endpoint in .NET:

Step 1: Create a Model

In .NET, a model represents a table in a database. To create a model, you can use the \`System.ComponentModel.DataAnnotations\` namespace. Here's an example of how to create a simple model:
\`\`\`csharp
using System.ComponentModel.DataAnnotations;

public class User
{
    [Key]
    public int Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
}
\`\`\`
In this example, we're creating a \`User\` model with three properties: \`Id\`, \`Name\`, and \`Email\`. The \`[Key]\` attribute is used to specify the primary key of the table.

Step 2: Add the Model to the Database

Once you have created the model, you can add it to the database using the \`DbContext\` class. Here's an example of how to do this:
\`\`\`csharp
using System.Data.Entity;
using System.Data.Entity.Infrastructure;

public class MyDbContext : DbContext
{
    public MyDbContext() : base("name=MyDbContext;user=myUser;password=myPassword;")
    {
    }

    public DbSet<User> Users { get; set; }
}
\`\`\`
In this example, we're creating a \`MyDbContext\` class that inherits from \`DbContext\`. We're also defining a \`DbSet<User>\` property to store the \`User\` model in the database.

Step 3: Create an Endpoint

An endpoint is a URL that can be used to access the data in the database. To create an endpoint, you can use the \`HttpGet\`, \`HttpPost\`, \`HttpPut\`, and \`HttpDelete\` methods in the \`Controller\` class. Here's an example of how to create an endpoint for the \`User\` model:
\`\`\`csharp
using System.Web.Http;
using MyApp.Models;
using MyApp.Services;

namespace MyApp.Controllers
{
    public class UsersController : ApiController
    {
        private readonly MyDbContext _dbContext;

        public UsersController(MyDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        // GET /users
        [HttpGet]
        public IQueryable<User> GetUsers()
        {
            return _dbContext.Users;
        }

        // POST /users
        [HttpPost]
        public void PostUser(User user)
        {
            _dbContext.Users.Add(user);
            _dbContext.SaveChanges();
        }

        // GET /users/{id}
        [HttpGet("{id}")]
        public User GetUser(int id)
        {
            return _dbContext.Users.Find(id);
        }

        // PUT /users/{id}
        [HttpPut("{id}")]
        public void PutUser(int id, User user)
        {
            var existingUser = _dbContext.Users.Find(id);
            if (existingUser != null)
            {
                _dbContext.Users.Add(user);
                _dbContext.SaveChanges();
            }
        }

        // DELETE /users/{id}
        [HttpDelete("{id}")]
        public void DeleteUser(int id)
        {
            var user = _dbContext.Users.Find(id);
            if (user != null)
            {
                _dbContext.Users.Remove(user);
                _dbContext.SaveChanges();
            }
        }
    }
}
\`\`\`
In this example, we're creating a \`UsersController\` class that has methods for retrieving, creating, updating, and deleting \`User\` models. The \`GetUsers\` method returns a queryable collection of \`User\` models, while the \`PostUser\` method adds a new \`User\` model to the database. The \`GetUser\` method retrieves a single \`User\` model by its ID, and the \`PutUser\` method updates an existing \`User\` model. Finally, the \`DeleteUser\` method deletes a \`User\` model by its ID.
`

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
            <Typography fontWeight={400}>{message.content}</Typography>
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
              {guide}
            </ReactMarkdown>
          </Stack>
        </Stack>
      ))}
    </>
  )
}

export default ChatSectionCardComponent
