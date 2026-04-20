import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';
import { connectorVersionedDocs } from './src/utils/sidebarUtils';

/**
 * WSO2 Integrator Documentation — Sidebar Configuration
 *
 * Structure follows the Documentation Blueprint (March 2026).
 * Seven top-level sections answering seven developer questions:
 *
 *   Get Started       — "I'm new — what is this and how do I begin?"
 *   Develop           — "How do I build, transform, and test X?"
 *   Connectors        — "Can I connect to Y?"
 *   GenAI             — "How do I build AI agents, RAG, or MCP?"
 *   Tutorials         — "Show me a complete, real example"
 *   Deploy & Operate  — "How do I ship, run, and secure this?"
 *   Reference         — "What's the exact syntax / config / API for Z?"
 */
const sidebars: SidebarsConfig = {
  mainSidebar: [
    // ─────────────────────────────────────────────
    // GET STARTED
    // "I'm new — what is this and how do I begin?"
    // ─────────────────────────────────────────────
    {
      type: 'category',
      label: 'Get Started',
      collapsed: true,
      link: { type: 'doc', id: 'get-started/index' },
      items: [
        'get-started/index',
        'get-started/why-integrator',
        'get-started/key-concepts',
        {
          type: 'category',
          label: 'Set Up',
          items: [
            'get-started/system-requirements',
            'get-started/install',
            'get-started/create-first-project',
            'get-started/ide',
          ],
        },
        {
          type: 'category',
          label: 'Quick Starts',
          items: [
            'get-started/api-integration',
            'get-started/event-integration',
            'get-started/file-integration',
            'get-started/automation',
            'get-started/data-service',
            'get-started/ai-agent',
          ],
        },
      ],
    },

    // ─────────────────────────────────────────────
    // DEVELOP
    // "How do I build, transform, and test X?"
    // ─────────────────────────────────────────────
    {
      type: 'category',
      label: 'Develop',
      collapsed: true,
      link: { type: 'doc', id: 'develop/index' },
      items: [
        // 6.1 Create Integrations
        {
          type: 'category',
          label: 'Create Integrations',
          items: [
            'develop/create-integrations/create-new-integration',
            'develop/create-integrations/open-integration',
            'develop/create-integrations/explore-sample-integrations',
            'develop/create-integrations/create-library',
            'develop/create-integrations/create-project',
            'develop/create-integrations/open-project',
            'develop/create-integrations/migrate-integrations',
          ],
        },
        // 6.2 Project Views
        {
          type: 'category',
          label: 'Project Views',
          items: [
            'develop/project-views/project-view',
            'develop/project-views/integration-view',
            'develop/project-views/library-view',
          ],
        },
        // 6.3 Integration Artifacts
        {
          type: 'category',
          label: 'Integration Artifacts',
          items: [
            'develop/integration-artifacts/automation',
            {
              type: 'category', label: 'Integration as API',
              collapsed: true,
              items: [
                'develop/integration-artifacts/service/http',
                'develop/integration-artifacts/service/graphql',
                'develop/integration-artifacts/service/tcp',
                'develop/integration-artifacts/service/websocket',
                'develop/integration-artifacts/service/websub',
                'develop/integration-artifacts/service/grpc',
              ],
            },
            {
              type: 'category', label: 'Event Integration',
              collapsed: true,
              items: [
                'develop/integration-artifacts/event/kafka',
                'develop/integration-artifacts/event/rabbitmq',
                'develop/integration-artifacts/event/mqtt',
                'develop/integration-artifacts/event/azure-service-bus',
                'develop/integration-artifacts/event/pop3-imap4',
                'develop/integration-artifacts/event/salesforce',
                'develop/integration-artifacts/event/twilio',
                'develop/integration-artifacts/event/github-webhooks',
                'develop/integration-artifacts/event/solace',
                'develop/integration-artifacts/event/cdc-mssql',
                'develop/integration-artifacts/event/cdc-postgresql',
              ],
            },
            {
              type: 'category', label: 'File Integration',
              collapsed: true,
              items: [
                {
                  type: 'category', label: 'Remote Servers (FTP/SFTP)',
                  collapsed: true,
                  link: { type: 'doc', id: 'develop/integration-artifacts/file/ftp-sftp' },
                  items: [
                    'develop/integration-artifacts/file/csv-fault-tolerance',
                    'develop/integration-artifacts/file/dependency-triggers',
                    'develop/integration-artifacts/file/streaming-large',
                    'develop/integration-artifacts/file/resiliency',
                    'develop/integration-artifacts/file/high-availability',
                  ],
                },
                'develop/integration-artifacts/file/local',
              ],
            },
            {
              type: 'category', label: 'Other Artifacts',
              collapsed: true,
              items: [
                'develop/integration-artifacts/supporting/types',
                'develop/integration-artifacts/supporting/connections',
                'develop/integration-artifacts/supporting/configurations',
                'develop/integration-artifacts/supporting/functions',
                'develop/integration-artifacts/supporting/data-mapper',
              ],
            },
          ],
        },
        // 6.4 Design Integration Logic
        {
          type: 'category',
          label: 'Design Integration Logic',
          items: [
            'develop/design-logic/index',
            'develop/design-logic/flow-designer',
            'develop/design-logic/connections',
            'develop/design-logic/control-flow',
            'develop/design-logic/error-handling',
            'develop/design-logic/expressions',
            'develop/design-logic/query-expressions',
            'develop/design-logic/configuration-management',
            'develop/design-logic/functions',
            'develop/design-logic/ballerina-pro-code',
            'develop/design-logic/java-interoperability',
          ],
        },
        // 6.5 Transform (per blueprint)
        {
          type: 'category',
          label: 'Transform',
          items: [
            'develop/transform/data-mapper',
            'develop/transform/json',
            'develop/transform/xml',
            'develop/transform/csv-flat-file',
            'develop/transform/edi',
            'develop/transform/yaml-toml',
            'develop/transform/type-system',
            'develop/transform/query-expressions',
            'develop/transform/expressions-functions',
          ],
        },
        // 6.6 Try & Test
        {
          type: 'category',
          label: 'Try & Test',
          items: [
            'develop/test/try-it',
            'develop/test/unit',
            'develop/test/services-clients',
            'develop/test/data-driven',
            'develop/test/groups',
            'develop/test/mocking',
            'develop/test/execute',
            'develop/test/code-coverage',
          ],
        },
        // 6.7 Debugging & Troubleshooting
        {
          type: 'category',
          label: 'Debugging & Troubleshooting',
          items: [
            'develop/debugging/index',
            'develop/debugging/errors-and-stack-traces',
            'develop/debugging/editor',
            'develop/debugging/remote',
            'develop/debugging/strand-dump-analysis',
            'develop/debugging/performance-profiling',
          ],
        },
        // 6.8 Organize Code
        {
          type: 'category',
          label: 'Organize Code',
          items: [
            'develop/organize-code/packages-modules',
            'develop/organize-code/package-references',
            'develop/organize-code/manage-dependencies',
            'develop/organize-code/workspaces',
            { type: 'doc', id: 'develop/organize-code/style-guide', label: 'Code Style Guide & Formatting' },
            { type: 'doc', id: 'develop/organize-code/generate-docs', label: 'Generating Code Documentation' },
          ],
        },
        // 6.9 Tools
        {
          type: 'category',
          label: 'Tools',
          link: { type: 'doc', id: 'develop/tools/index' },
          items: [
            'develop/tools/migration',
            'develop/tools/openapi-tool',
            'develop/tools/graphql-tool',
            'develop/tools/asyncapi-tool',
            'develop/tools/grpc-tool',
            'develop/tools/health-tool',
            'develop/tools/edi-tool',
            'develop/tools/wsdl-tool',
            'develop/tools/xsd-tool',
            {
              type: 'category', label: 'Data Persistence',
              collapsed: true,
              items: [
                'develop/tools/data-persistence/index',
                'develop/tools/data-persistence/data-model-definition',
                'develop/tools/data-persistence/client-api',
                'develop/tools/data-persistence/supported-stores',
                'develop/tools/data-persistence/database-introspection',
              ],
            },
            'develop/tools/scan-tool',
          ],
        },
      ],
    },

    // ─────────────────────────────────────────────
    // CONNECTORS
    // "Can I connect to Y?"
    // ─────────────────────────────────────────────
    {
      type: 'category',
      label: 'Connectors',
      collapsed: true,
      link: { type: 'doc', id: 'connectors/index' },
      items: [
        // ── Connector Catalog ──
        {
          type: 'category',
          label: 'Connector Catalog',
          collapsed: true,
          link: { type: 'doc', id: 'connectors/catalog/index' },
          items: [
            // ── Connector categories (alphabetical) ──
            {
              type: 'category',
              label: 'AI',
              link: { type: 'doc', id: 'connectors/catalog/built-in/ai/index' },
              items: [
                'connectors/catalog/built-in/ai/action-reference',
                'connectors/catalog/built-in/ai/trigger-reference',
              ],
            },
            {
              type: 'category',
              label: 'AI Devant',
              link: { type: 'doc', id: 'connectors/catalog/ai-ml/ai-devant/index' },
              items: [
                'connectors/catalog/ai-ml/ai-devant/setup-guide',
                'connectors/catalog/ai-ml/ai-devant/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'AI Memory MSSQL',
              link: { type: 'doc', id: 'connectors/catalog/ai-ml/ai-memory-mssql/index' },
              items: [
                'connectors/catalog/ai-ml/ai-memory-mssql/setup-guide',
                'connectors/catalog/ai-ml/ai-memory-mssql/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'AMP',
              link: { type: 'doc', id: 'connectors/catalog/developer-tools/amp/index' },
              items: [
                'connectors/catalog/developer-tools/amp/setup-guide',
                'connectors/catalog/developer-tools/amp/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'AWS Marketplace MPE',
              link: { type: 'doc', id: 'connectors/catalog/cloud-infrastructure/aws-marketplace-mpe/index' },
              items: [
                'connectors/catalog/cloud-infrastructure/aws-marketplace-mpe/setup-guide',
                'connectors/catalog/cloud-infrastructure/aws-marketplace-mpe/action-reference',
                'connectors/catalog/cloud-infrastructure/aws-marketplace-mpe/example',
              ],
            },
            {
              type: 'category',
              label: 'AWS Marketplace MPM',
              link: { type: 'doc', id: 'connectors/catalog/cloud-infrastructure/aws-marketplace-mpm/index' },
              items: [
                'connectors/catalog/cloud-infrastructure/aws-marketplace-mpm/setup-guide',
                'connectors/catalog/cloud-infrastructure/aws-marketplace-mpm/action-reference',
                'connectors/catalog/cloud-infrastructure/aws-marketplace-mpm/example',
              ],
            },
            {
              type: 'category',
              label: 'AWS Redshift',
              link: { type: 'doc', id: 'connectors/catalog/database/aws-redshift/index' },
              items: [
                'connectors/catalog/database/aws-redshift/setup-guide',
                'connectors/catalog/database/aws-redshift/action-reference',
                'connectors/catalog/database/aws-redshift/example',
              ],
            },
            {
              type: 'category',
              label: 'AWS Redshift Data',
              link: { type: 'doc', id: 'connectors/catalog/database/aws-redshiftdata/index' },
              items: [
                'connectors/catalog/database/aws-redshiftdata/setup-guide',
                'connectors/catalog/database/aws-redshiftdata/action-reference',
                'connectors/catalog/database/aws-redshiftdata/example',
              ],
            },
            {
              type: 'category',
              label: 'AWS S3',
              link: { type: 'doc', id: 'connectors/catalog/storage-file/aws-s3/index' },
              items: [
                'connectors/catalog/storage-file/aws-s3/setup-guide',
                'connectors/catalog/storage-file/aws-s3/action-reference',
                'connectors/catalog/storage-file/aws-s3/example',
              ],
            },
            {
              type: 'category',
              label: 'AWS SNS',
              link: { type: 'doc', id: 'connectors/catalog/communication/aws-sns/index' },
              items: [
                'connectors/catalog/communication/aws-sns/setup-guide',
                'connectors/catalog/communication/aws-sns/action-reference',
                'connectors/catalog/communication/aws-sns/example',
              ],
            },
            {
              type: 'category',
              label: 'AWS SQS',
              link: { type: 'doc', id: 'connectors/catalog/messaging/aws-sqs/index' },
              items: [
                'connectors/catalog/messaging/aws-sqs/setup-guide',
                'connectors/catalog/messaging/aws-sqs/action-reference',
                'connectors/catalog/messaging/aws-sqs/trigger-reference',
                'connectors/catalog/messaging/aws-sqs/example',
              ],
            },
            {
              type: 'category',
              label: 'AWS Secrets Manager',
              link: { type: 'doc', id: 'connectors/catalog/security-identity/aws-secretmanager/index' },
              items: [
                'connectors/catalog/security-identity/aws-secretmanager/setup-guide',
                'connectors/catalog/security-identity/aws-secretmanager/action-reference',
                'connectors/catalog/security-identity/aws-secretmanager/example',
              ],
            },
            {
              type: 'category',
              label: 'Alfresco',
              link: { type: 'doc', id: 'connectors/catalog/storage-file/alfresco/index' },
              items: [
                'connectors/catalog/storage-file/alfresco/setup-guide',
                'connectors/catalog/storage-file/alfresco/action-reference',
                'connectors/catalog/storage-file/alfresco/example',
              ],
            },
            {
              type: 'category',
              label: 'Anthropic LLM',
              link: { type: 'doc', id: 'connectors/catalog/ai-ml/ai-anthropic/index' },
              items: [
                'connectors/catalog/ai-ml/ai-anthropic/setup-guide',
                'connectors/catalog/ai-ml/ai-anthropic/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'Asana',
              link: { type: 'doc', id: 'connectors/catalog/productivity-collaboration/asana/index' },
              items: [
                'connectors/catalog/productivity-collaboration/asana/setup-guide',
                'connectors/catalog/productivity-collaboration/asana/action-reference',
                'connectors/catalog/productivity-collaboration/asana/example',
              ],
            },
            {
              type: 'category',
              label: 'Azure AI Search',
              link: { type: 'doc', id: 'connectors/catalog/ai-ml/azure-ai-search/index' },
              items: [
                'connectors/catalog/ai-ml/azure-ai-search/setup-guide',
                'connectors/catalog/ai-ml/azure-ai-search/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'Azure AI Search Index',
              link: { type: 'doc', id: 'connectors/catalog/ai-ml/azure-ai-search-index/index' },
              items: [
                'connectors/catalog/ai-ml/azure-ai-search-index/setup-guide',
                'connectors/catalog/ai-ml/azure-ai-search-index/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'Azure OpenAI',
              link: { type: 'doc', id: 'connectors/catalog/ai-ml/ai-azure/index' },
              items: [
                'connectors/catalog/ai-ml/ai-azure/setup-guide',
                'connectors/catalog/ai-ml/ai-azure/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'Azure Service Bus',
              link: { type: 'doc', id: 'connectors/catalog/messaging/asb/index' },
              items: [
                'connectors/catalog/messaging/asb/setup-guide',
                'connectors/catalog/messaging/asb/action-reference',
                'connectors/catalog/messaging/asb/trigger-reference',
              ],
            },
            {
              type: 'category',
              label: 'Azure Storage Service',
              link: { type: 'doc', id: 'connectors/catalog/storage-file/azure-storage-service/index' },
              items: [
                'connectors/catalog/storage-file/azure-storage-service/setup-guide',
                'connectors/catalog/storage-file/azure-storage-service/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'CDC',
              link: { type: 'doc', id: 'connectors/catalog/database/cdc/index' },
              items: [
                'connectors/catalog/database/cdc/setup-guide',
                'connectors/catalog/database/cdc/trigger-reference',
              ],
            },
            {
              type: 'category',
              label: 'Candid',
              link: { type: 'doc', id: 'connectors/catalog/productivity-collaboration/candid/index' },
              items: [
                'connectors/catalog/productivity-collaboration/candid/setup-guide',
                'connectors/catalog/productivity-collaboration/candid/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'Confluent Avro SerDes',
              link: { type: 'doc', id: 'connectors/catalog/messaging/confluent-cavroserdes/index' },
              items: [
                'connectors/catalog/messaging/confluent-cavroserdes/setup-guide',
                'connectors/catalog/messaging/confluent-cavroserdes/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'Confluent Schema Registry',
              link: { type: 'doc', id: 'connectors/catalog/messaging/confluent-cregistry/index' },
              items: [
                'connectors/catalog/messaging/confluent-cregistry/setup-guide',
                'connectors/catalog/messaging/confluent-cregistry/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'Connector Catalog',
              link: { type: 'doc', id: 'connectors/catalog/index' },
              items: [
                'category',
                'AI',
                'doc',
                'connectors/catalog/built-in/ai',
                'connectors/catalog/built-in/ai/action-reference',
                'connectors/catalog/built-in/ai/trigger-reference',
              ],
            },
            {
              type: 'category',
              label: 'Copybook',
              link: { type: 'doc', id: 'connectors/catalog/developer-tools/copybook/index' },
              items: [
                'connectors/catalog/developer-tools/copybook/setup-guide',
                'connectors/catalog/developer-tools/copybook/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'DeepSeek',
              link: { type: 'doc', id: 'connectors/catalog/ai-ml/ai-deepseek/index' },
              items: [
                'connectors/catalog/ai-ml/ai-deepseek/setup-guide',
                'connectors/catalog/ai-ml/ai-deepseek/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'Discord',
              link: { type: 'doc', id: 'connectors/catalog/communication/discord/index' },
              items: [
                'connectors/catalog/communication/discord/setup-guide',
                'connectors/catalog/communication/discord/action-reference',
                'connectors/catalog/communication/discord/example',
              ],
            },
            {
              type: 'category',
              label: 'DocuSign Admin',
              link: { type: 'doc', id: 'connectors/catalog/productivity-collaboration/docusign-dsadmin/index' },
              items: [
                'connectors/catalog/productivity-collaboration/docusign-dsadmin/setup-guide',
                'connectors/catalog/productivity-collaboration/docusign-dsadmin/action-reference',
                'connectors/catalog/productivity-collaboration/docusign-dsadmin/example',
              ],
            },
            {
              type: 'category',
              label: 'Elastic Cloud',
              link: { type: 'doc', id: 'connectors/catalog/cloud-infrastructure/elastic-elasticcloud/index' },
              items: [
                'connectors/catalog/cloud-infrastructure/elastic-elasticcloud/setup-guide',
                'connectors/catalog/cloud-infrastructure/elastic-elasticcloud/action-reference',
                'connectors/catalog/cloud-infrastructure/elastic-elasticcloud/example',
              ],
            },
            {
              type: 'category',
              label: 'Email',
              link: { type: 'doc', id: 'connectors/catalog/built-in/email/index' },
              items: [
                'connectors/catalog/built-in/email/setup-guide',
                'connectors/catalog/built-in/email/action-reference',
                'connectors/catalog/built-in/email/trigger-reference',
              ],
            },
            {
              type: 'category',
              label: 'FTP',
              link: { type: 'doc', id: 'connectors/catalog/built-in/ftp/index' },
              items: [
                'connectors/catalog/built-in/ftp/action-reference',
                'connectors/catalog/built-in/ftp/trigger-reference',
              ],
            },
            {
              type: 'category',
              label: 'Github',
              link: { type: 'doc', id: 'connectors/catalog/developer-tools/github/index' },
              items: [
                'connectors/catalog/developer-tools/github/setup-guide',
                'connectors/catalog/developer-tools/github/action-reference',
                'connectors/catalog/developer-tools/github/example',
              ],
            },
            {
              type: 'category',
              label: 'Gmail',
              link: { type: 'doc', id: 'connectors/catalog/communication/googleapis-gmail/index' },
              items: [
                'connectors/catalog/communication/googleapis-gmail/setup-guide',
                'connectors/catalog/communication/googleapis-gmail/action-reference',
                'connectors/catalog/communication/googleapis-gmail/example',
              ],
            },
            {
              type: 'category',
              label: 'Google Calendar',
              link: { type: 'doc', id: 'connectors/catalog/productivity-collaboration/googleapis-calendar/index' },
              items: [
                'connectors/catalog/productivity-collaboration/googleapis-calendar/setup-guide',
                'connectors/catalog/productivity-collaboration/googleapis-calendar/action-reference',
                'connectors/catalog/productivity-collaboration/googleapis-calendar/example',
              ],
            },
            {
              type: 'category',
              label: 'Google Cloud Pub/Sub',
              link: { type: 'doc', id: 'connectors/catalog/messaging/gcloud-pubsub/index' },
              items: [
                'connectors/catalog/messaging/gcloud-pubsub/setup-guide',
                'connectors/catalog/messaging/gcloud-pubsub/action-reference',
                'connectors/catalog/messaging/gcloud-pubsub/trigger-reference',
              ],
            },
            {
              type: 'category',
              label: 'Google GCalendar',
              link: { type: 'doc', id: 'connectors/catalog/productivity-collaboration/googleapis-gcalendar/index' },
              items: [
                'connectors/catalog/productivity-collaboration/googleapis-gcalendar/setup-guide',
                'connectors/catalog/productivity-collaboration/googleapis-gcalendar/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'Google Sheets',
              link: { type: 'doc', id: 'connectors/catalog/productivity-collaboration/googleapis-sheets/index' },
              items: [
                'connectors/catalog/productivity-collaboration/googleapis-sheets/setup-guide',
                'connectors/catalog/productivity-collaboration/googleapis-sheets/action-reference',
                'connectors/catalog/productivity-collaboration/googleapis-sheets/example',
              ],
            },
            {
              type: 'category',
              label: 'GraphQL',
              link: { type: 'doc', id: 'connectors/catalog/built-in/graphql/index' },
              items: [
                'connectors/catalog/built-in/graphql/action-reference',
                'connectors/catalog/built-in/graphql/trigger-reference',
              ],
            },
            {
              type: 'category',
              label: 'Guidewire InsuranceNow',
              link: { type: 'doc', id: 'connectors/catalog/erp-business/guidewire-insnow/index' },
              items: [
                'connectors/catalog/erp-business/guidewire-insnow/setup-guide',
                'connectors/catalog/erp-business/guidewire-insnow/action-reference',
                'connectors/catalog/erp-business/guidewire-insnow/example',
              ],
            },
            {
              type: 'category',
              label: 'HTTP',
              link: { type: 'doc', id: 'connectors/catalog/built-in/http/index' },
              items: [
                'connectors/catalog/built-in/http/action-reference',
                'connectors/catalog/built-in/http/trigger-reference',
              ],
            },
            {
              type: 'category',
              label: 'HubSpot Automation Actions',
              link: { type: 'doc', id: 'connectors/catalog/crm-sales/hubspot-automation-actions/index' },
              items: [
                'connectors/catalog/crm-sales/hubspot-automation-actions/setup-guide',
                'connectors/catalog/crm-sales/hubspot-automation-actions/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'HubSpot CRM Associations',
              link: { type: 'doc', id: 'connectors/catalog/crm-sales/hubspot-crm-associations/index' },
              items: [
                'connectors/catalog/crm-sales/hubspot-crm-associations/setup-guide',
                'connectors/catalog/crm-sales/hubspot-crm-associations/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'HubSpot CRM Associations Schema',
              link: { type: 'doc', id: 'connectors/catalog/crm-sales/hubspot-crm-associations-schema/index' },
              items: [
                'connectors/catalog/crm-sales/hubspot-crm-associations-schema/setup-guide',
                'connectors/catalog/crm-sales/hubspot-crm-associations-schema/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'HubSpot CRM Commerce Carts',
              link: { type: 'doc', id: 'connectors/catalog/crm-sales/hubspot-crm-commerce-carts/index' },
              items: [
                'connectors/catalog/crm-sales/hubspot-crm-commerce-carts/setup-guide',
                'connectors/catalog/crm-sales/hubspot-crm-commerce-carts/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'HubSpot CRM Commerce Discounts',
              link: { type: 'doc', id: 'connectors/catalog/crm-sales/hubspot-crm-commerce-discounts/index' },
              items: [
                'connectors/catalog/crm-sales/hubspot-crm-commerce-discounts/setup-guide',
                'connectors/catalog/crm-sales/hubspot-crm-commerce-discounts/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'HubSpot CRM Commerce Orders',
              link: { type: 'doc', id: 'connectors/catalog/crm-sales/hubspot-crm-commerce-orders/index' },
              items: [
                'connectors/catalog/crm-sales/hubspot-crm-commerce-orders/setup-guide',
                'connectors/catalog/crm-sales/hubspot-crm-commerce-orders/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'HubSpot CRM Commerce Quotes',
              link: { type: 'doc', id: 'connectors/catalog/crm-sales/hubspot-crm-commerce-quotes/index' },
              items: [
                'connectors/catalog/crm-sales/hubspot-crm-commerce-quotes/setup-guide',
                'connectors/catalog/crm-sales/hubspot-crm-commerce-quotes/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'HubSpot CRM Commerce Taxes',
              link: { type: 'doc', id: 'connectors/catalog/crm-sales/hubspot-crm-commerce-taxes/index' },
              items: [
                'connectors/catalog/crm-sales/hubspot-crm-commerce-taxes/setup-guide',
                'connectors/catalog/crm-sales/hubspot-crm-commerce-taxes/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'HubSpot CRM Companies',
              link: { type: 'doc', id: 'connectors/catalog/crm-sales/hubspot-crm-obj-companies/index' },
              items: [
                'connectors/catalog/crm-sales/hubspot-crm-obj-companies/setup-guide',
                'connectors/catalog/crm-sales/hubspot-crm-obj-companies/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'HubSpot CRM Contacts',
              link: { type: 'doc', id: 'connectors/catalog/crm-sales/hubspot-crm-obj-contacts/index' },
              items: [
                'connectors/catalog/crm-sales/hubspot-crm-obj-contacts/setup-guide',
                'connectors/catalog/crm-sales/hubspot-crm-obj-contacts/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'HubSpot CRM Deals',
              link: { type: 'doc', id: 'connectors/catalog/crm-sales/hubspot-crm-obj-deals/index' },
              items: [
                'connectors/catalog/crm-sales/hubspot-crm-obj-deals/setup-guide',
                'connectors/catalog/crm-sales/hubspot-crm-obj-deals/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'HubSpot CRM Engagement Meeting',
              link: { type: 'doc', id: 'connectors/catalog/crm-sales/hubspot-crm-engagement-meeting/index' },
              items: [
                'connectors/catalog/crm-sales/hubspot-crm-engagement-meeting/setup-guide',
                'connectors/catalog/crm-sales/hubspot-crm-engagement-meeting/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'HubSpot CRM Engagement Notes',
              link: { type: 'doc', id: 'connectors/catalog/crm-sales/hubspot-crm-engagement-notes/index' },
              items: [
                'connectors/catalog/crm-sales/hubspot-crm-engagement-notes/setup-guide',
                'connectors/catalog/crm-sales/hubspot-crm-engagement-notes/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'HubSpot CRM Engagements Calls',
              link: { type: 'doc', id: 'connectors/catalog/crm-sales/hubspot-crm-engagements-calls/index' },
              items: [
                'connectors/catalog/crm-sales/hubspot-crm-engagements-calls/setup-guide',
                'connectors/catalog/crm-sales/hubspot-crm-engagements-calls/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'HubSpot CRM Engagements Communications',
              link: { type: 'doc', id: 'connectors/catalog/crm-sales/hubspot-crm-engagements-communications/index' },
              items: [
                'connectors/catalog/crm-sales/hubspot-crm-engagements-communications/setup-guide',
                'connectors/catalog/crm-sales/hubspot-crm-engagements-communications/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'HubSpot CRM Engagements Email',
              link: { type: 'doc', id: 'connectors/catalog/crm-sales/hubspot-crm-engagements-email/index' },
              items: [
                'connectors/catalog/crm-sales/hubspot-crm-engagements-email/setup-guide',
                'connectors/catalog/crm-sales/hubspot-crm-engagements-email/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'HubSpot CRM Engagements Tasks',
              link: { type: 'doc', id: 'connectors/catalog/crm-sales/hubspot-crm-engagements-tasks/index' },
              items: [
                'connectors/catalog/crm-sales/hubspot-crm-engagements-tasks/setup-guide',
                'connectors/catalog/crm-sales/hubspot-crm-engagements-tasks/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'HubSpot CRM Extensions Timelines',
              link: { type: 'doc', id: 'connectors/catalog/crm-sales/hubspot-crm-extensions-timelines/index' },
              items: [
                'connectors/catalog/crm-sales/hubspot-crm-extensions-timelines/setup-guide',
                'connectors/catalog/crm-sales/hubspot-crm-extensions-timelines/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'HubSpot CRM Extensions Videoconferencing',
              link: { type: 'doc', id: 'connectors/catalog/crm-sales/hubspot-crm-extensions-videoconferencing/index' },
              items: [
                'connectors/catalog/crm-sales/hubspot-crm-extensions-videoconferencing/setup-guide',
                'connectors/catalog/crm-sales/hubspot-crm-extensions-videoconferencing/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'HubSpot CRM Feedback',
              link: { type: 'doc', id: 'connectors/catalog/crm-sales/hubspot-crm-obj-feedback/index' },
              items: [
                'connectors/catalog/crm-sales/hubspot-crm-obj-feedback/setup-guide',
                'connectors/catalog/crm-sales/hubspot-crm-obj-feedback/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'HubSpot CRM Import',
              link: { type: 'doc', id: 'connectors/catalog/crm-sales/hubspot-crm-import/index' },
              items: [
                'connectors/catalog/crm-sales/hubspot-crm-import/setup-guide',
                'connectors/catalog/crm-sales/hubspot-crm-import/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'HubSpot CRM Leads',
              link: { type: 'doc', id: 'connectors/catalog/crm-sales/hubspot-crm-obj-leads/index' },
              items: [
                'connectors/catalog/crm-sales/hubspot-crm-obj-leads/setup-guide',
                'connectors/catalog/crm-sales/hubspot-crm-obj-leads/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'HubSpot CRM Line Items',
              link: { type: 'doc', id: 'connectors/catalog/crm-sales/hubspot-crm-obj-lineitems/index' },
              items: [
                'connectors/catalog/crm-sales/hubspot-crm-obj-lineitems/setup-guide',
                'connectors/catalog/crm-sales/hubspot-crm-obj-lineitems/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'HubSpot CRM Lists',
              link: { type: 'doc', id: 'connectors/catalog/crm-sales/hubspot-crm-lists/index' },
              items: [
                'connectors/catalog/crm-sales/hubspot-crm-lists/setup-guide',
                'connectors/catalog/crm-sales/hubspot-crm-lists/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'HubSpot CRM Owners',
              link: { type: 'doc', id: 'connectors/catalog/crm-sales/hubspot-crm-owners/index' },
              items: [
                'connectors/catalog/crm-sales/hubspot-crm-owners/setup-guide',
                'connectors/catalog/crm-sales/hubspot-crm-owners/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'HubSpot CRM Pipelines',
              link: { type: 'doc', id: 'connectors/catalog/crm-sales/hubspot-crm-pipelines/index' },
              items: [
                'connectors/catalog/crm-sales/hubspot-crm-pipelines/setup-guide',
                'connectors/catalog/crm-sales/hubspot-crm-pipelines/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'HubSpot CRM Products',
              link: { type: 'doc', id: 'connectors/catalog/crm-sales/hubspot-crm-obj-products/index' },
              items: [
                'connectors/catalog/crm-sales/hubspot-crm-obj-products/setup-guide',
                'connectors/catalog/crm-sales/hubspot-crm-obj-products/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'HubSpot CRM Properties',
              link: { type: 'doc', id: 'connectors/catalog/crm-sales/hubspot-crm-properties/index' },
              items: [
                'connectors/catalog/crm-sales/hubspot-crm-properties/setup-guide',
                'connectors/catalog/crm-sales/hubspot-crm-properties/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'HubSpot CRM Schemas',
              link: { type: 'doc', id: 'connectors/catalog/crm-sales/hubspot-crm-obj-schemas/index' },
              items: [
                'connectors/catalog/crm-sales/hubspot-crm-obj-schemas/setup-guide',
                'connectors/catalog/crm-sales/hubspot-crm-obj-schemas/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'HubSpot CRM Tickets',
              link: { type: 'doc', id: 'connectors/catalog/crm-sales/hubspot-crm-obj-tickets/index' },
              items: [
                'connectors/catalog/crm-sales/hubspot-crm-obj-tickets/setup-guide',
                'connectors/catalog/crm-sales/hubspot-crm-obj-tickets/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'HubSpot Marketing Campaigns',
              link: { type: 'doc', id: 'connectors/catalog/marketing-social/hubspot-marketing-campaigns/index' },
              items: [
                'connectors/catalog/marketing-social/hubspot-marketing-campaigns/setup-guide',
                'connectors/catalog/marketing-social/hubspot-marketing-campaigns/action-reference',
                'connectors/catalog/marketing-social/hubspot-marketing-campaigns/example',
              ],
            },
            {
              type: 'category',
              label: 'HubSpot Marketing Emails',
              link: { type: 'doc', id: 'connectors/catalog/marketing-social/hubspot-marketing-emails/index' },
              items: [
                'connectors/catalog/marketing-social/hubspot-marketing-emails/setup-guide',
                'connectors/catalog/marketing-social/hubspot-marketing-emails/action-reference',
                'connectors/catalog/marketing-social/hubspot-marketing-emails/example',
              ],
            },
            {
              type: 'category',
              label: 'HubSpot Marketing Events',
              link: { type: 'doc', id: 'connectors/catalog/marketing-social/hubspot-marketing-events/index' },
              items: [
                'connectors/catalog/marketing-social/hubspot-marketing-events/setup-guide',
                'connectors/catalog/marketing-social/hubspot-marketing-events/action-reference',
                'connectors/catalog/marketing-social/hubspot-marketing-events/example',
              ],
            },
            {
              type: 'category',
              label: 'HubSpot Marketing Forms',
              link: { type: 'doc', id: 'connectors/catalog/marketing-social/hubspot-marketing-forms/index' },
              items: [
                'connectors/catalog/marketing-social/hubspot-marketing-forms/setup-guide',
                'connectors/catalog/marketing-social/hubspot-marketing-forms/action-reference',
                'connectors/catalog/marketing-social/hubspot-marketing-forms/example',
              ],
            },
            {
              type: 'category',
              label: 'HubSpot Marketing Subscriptions',
              link: { type: 'doc', id: 'connectors/catalog/marketing-social/hubspot-marketing-subscriptions/index' },
              items: [
                'connectors/catalog/marketing-social/hubspot-marketing-subscriptions/setup-guide',
                'connectors/catalog/marketing-social/hubspot-marketing-subscriptions/action-reference',
                'connectors/catalog/marketing-social/hubspot-marketing-subscriptions/example',
              ],
            },
            {
              type: 'category',
              label: 'HubSpot Marketing Transactional',
              link: { type: 'doc', id: 'connectors/catalog/marketing-social/hubspot-marketing-transactional/index' },
              items: [
                'connectors/catalog/marketing-social/hubspot-marketing-transactional/setup-guide',
                'connectors/catalog/marketing-social/hubspot-marketing-transactional/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'IBM CTG',
              link: { type: 'doc', id: 'connectors/catalog/erp-business/ibm-ctg/index' },
              items: [
                'connectors/catalog/erp-business/ibm-ctg/setup-guide',
                'connectors/catalog/erp-business/ibm-ctg/action-reference',
                'connectors/catalog/erp-business/ibm-ctg/example',
              ],
            },
            {
              type: 'category',
              label: 'IBM MQ',
              link: { type: 'doc', id: 'connectors/catalog/messaging/ibm-ibmmq/index' },
              items: [
                'connectors/catalog/messaging/ibm-ibmmq/setup-guide',
                'connectors/catalog/messaging/ibm-ibmmq/action-reference',
                'connectors/catalog/messaging/ibm-ibmmq/trigger-reference',
              ],
            },
            {
              type: 'category',
              label: 'Intercom',
              link: { type: 'doc', id: 'connectors/catalog/communication/intercom/index' },
              items: [
                'connectors/catalog/communication/intercom/setup-guide',
                'connectors/catalog/communication/intercom/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'JMS',
              link: { type: 'doc', id: 'connectors/catalog/messaging/java-jms/index' },
              items: [
                'connectors/catalog/messaging/java-jms/setup-guide',
                'connectors/catalog/messaging/java-jms/action-reference',
                'connectors/catalog/messaging/java-jms/trigger-reference',
              ],
            },
            {
              type: 'category',
              label: 'Java JDBC',
              link: { type: 'doc', id: 'connectors/catalog/database/java-jdbc/index' },
              items: [
                'connectors/catalog/database/java-jdbc/setup-guide',
                'connectors/catalog/database/java-jdbc/action-reference',
                'connectors/catalog/database/java-jdbc/example',
              ],
            },
            {
              type: 'category',
              label: 'Jira',
              link: { type: 'doc', id: 'connectors/catalog/productivity-collaboration/jira/index' },
              items: [
                'connectors/catalog/productivity-collaboration/jira/setup-guide',
                'connectors/catalog/productivity-collaboration/jira/action-reference',
                'connectors/catalog/productivity-collaboration/jira/example',
              ],
            },
            {
              type: 'category',
              label: 'Kafka',
              link: { type: 'doc', id: 'connectors/catalog/messaging/kafka/index' },
              items: [
                'connectors/catalog/messaging/kafka/setup-guide',
                'connectors/catalog/messaging/kafka/action-reference',
                'connectors/catalog/messaging/kafka/trigger-reference',
                'connectors/catalog/messaging/kafka/example',
              ],
            },
            {
              type: 'category',
              label: 'MCP',
              link: { type: 'doc', id: 'connectors/catalog/built-in/mcp/index' },
              items: [
                'connectors/catalog/built-in/mcp/action-reference',
                'connectors/catalog/built-in/mcp/trigger-reference',
              ],
            },
            {
              type: 'category',
              label: 'MQTT',
              link: { type: 'doc', id: 'connectors/catalog/built-in/mqtt' },
              items: [
                'connectors/catalog/built-in/mqtt/setup-guide',
                'connectors/catalog/built-in/mqtt/action-reference',
                'connectors/catalog/built-in/mqtt/trigger-reference',
              ],
            },
            {
              type: 'category',
              label: 'MSSQL',
              link: { type: 'doc', id: 'connectors/catalog/database/mssql/index' },
              items: [
                'connectors/catalog/database/mssql/setup-guide',
                'connectors/catalog/database/mssql/action-reference',
                'connectors/catalog/database/mssql/trigger-reference',
                'connectors/catalog/database/mssql/example',
              ],
            },
            {
              type: 'category',
              label: 'Mailchimp Marketing',
              link: { type: 'doc', id: 'connectors/catalog/marketing-social/mailchimp-marketing/index' },
              items: [
                'connectors/catalog/marketing-social/mailchimp-marketing/setup-guide',
                'connectors/catalog/marketing-social/mailchimp-marketing/action-reference',
                'connectors/catalog/marketing-social/mailchimp-marketing/example',
              ],
            },
            {
              type: 'category',
              label: 'Mailchimp Transactional',
              link: { type: 'doc', id: 'connectors/catalog/marketing-social/mailchimp-transactional/index' },
              items: [
                'connectors/catalog/marketing-social/mailchimp-transactional/setup-guide',
                'connectors/catalog/marketing-social/mailchimp-transactional/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'Microsoft OneDrive',
              link: { type: 'doc', id: 'connectors/catalog/storage-file/microsoft-onedrive/index' },
              items: [
                'connectors/catalog/storage-file/microsoft-onedrive/setup-guide',
                'connectors/catalog/storage-file/microsoft-onedrive/action-reference',
                'connectors/catalog/productivity-collaboration/microsoft-onedrive/example',
              ],
            },
            {
              type: 'category',
              label: 'Milvus',
              link: { type: 'doc', id: 'connectors/catalog/ai-ml/milvus/index' },
              items: [
                'connectors/catalog/ai-ml/milvus/setup-guide',
                'connectors/catalog/ai-ml/milvus/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'Mistral',
              link: { type: 'doc', id: 'connectors/catalog/ai-ml/mistral/index' },
              items: [
                'connectors/catalog/ai-ml/mistral/setup-guide',
                'connectors/catalog/ai-ml/mistral/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'Mistral AI',
              link: { type: 'doc', id: 'connectors/catalog/ai-ml/ai-mistral/index' },
              items: [
                'connectors/catalog/ai-ml/ai-mistral/setup-guide',
                'connectors/catalog/ai-ml/ai-mistral/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'MongoDB',
              link: { type: 'doc', id: 'connectors/catalog/database/mongodb/index' },
              items: [
                'connectors/catalog/database/mongodb/setup-guide',
                'connectors/catalog/database/mongodb/action-reference',
                'connectors/catalog/database/mongodb/example',
              ],
            },
            {
              type: 'category',
              label: 'MySQL',
              link: { type: 'doc', id: 'connectors/catalog/database/mysql/index' },
              items: [
                'connectors/catalog/database/mysql/setup-guide',
                'connectors/catalog/database/mysql/action-reference',
                'connectors/catalog/database/mysql/trigger-reference',
                'connectors/catalog/database/mysql/example',
              ],
            },
            {
              type: 'category',
              label: 'NATS',
              link: { type: 'doc', id: 'connectors/catalog/messaging/nats/index' },
              items: [
                'connectors/catalog/messaging/nats/setup-guide',
                'connectors/catalog/messaging/nats/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'NP',
              link: { type: 'doc', id: 'connectors/catalog/ai-ml/np/index' },
              items: [
                'connectors/catalog/ai-ml/np/setup-guide',
                'connectors/catalog/ai-ml/np/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'Ollama',
              link: { type: 'doc', id: 'connectors/catalog/ai-ml/ai-ollama/index' },
              items: [
                'connectors/catalog/ai-ml/ai-ollama/setup-guide',
                'connectors/catalog/ai-ml/ai-ollama/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'OpenAI',
              link: { type: 'doc', id: 'connectors/catalog/ai-ml/openai/index' },
              items: [
                'connectors/catalog/ai-ml/openai/setup-guide',
                'connectors/catalog/ai-ml/openai/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'OpenAI (AI)',
              link: { type: 'doc', id: 'connectors/catalog/ai-ml/ai-openai/index' },
              items: [
                'connectors/catalog/ai-ml/ai-openai/setup-guide',
                'connectors/catalog/ai-ml/ai-openai/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'OpenAI Audio',
              link: { type: 'doc', id: 'connectors/catalog/ai-ml/openai-audio/index' },
              items: [
                'connectors/catalog/ai-ml/openai-audio/setup-guide',
                'connectors/catalog/ai-ml/openai-audio/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'OpenAI Fine-Tunes',
              link: { type: 'doc', id: 'connectors/catalog/ai-ml/openai-finetunes/index' },
              items: [
                'connectors/catalog/ai-ml/openai-finetunes/setup-guide',
                'connectors/catalog/ai-ml/openai-finetunes/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'Oracle DB',
              link: { type: 'doc', id: 'connectors/catalog/database/oracledb/index' },
              items: [
                'connectors/catalog/database/oracledb/setup-guide',
                'connectors/catalog/database/oracledb/action-reference',
                'connectors/catalog/database/oracledb/example',
              ],
            },
            {
              type: 'category',
              label: 'PayPal Invoices',
              link: { type: 'doc', id: 'connectors/catalog/finance-accounting/paypal-invoices/index' },
              items: [
                'connectors/catalog/finance-accounting/paypal-invoices/setup-guide',
                'connectors/catalog/finance-accounting/paypal-invoices/action-reference',
                'connectors/catalog/finance-accounting/paypal-invoices/example',
              ],
            },
            {
              type: 'category',
              label: 'PayPal Orders',
              link: { type: 'doc', id: 'connectors/catalog/finance-accounting/paypal-orders/index' },
              items: [
                'connectors/catalog/finance-accounting/paypal-orders/setup-guide',
                'connectors/catalog/finance-accounting/paypal-orders/action-reference',
                'connectors/catalog/finance-accounting/paypal-orders/example',
              ],
            },
            {
              type: 'category',
              label: 'PayPal Payments',
              link: { type: 'doc', id: 'connectors/catalog/finance-accounting/paypal-payments/index' },
              items: [
                'connectors/catalog/finance-accounting/paypal-payments/setup-guide',
                'connectors/catalog/finance-accounting/paypal-payments/action-reference',
                'connectors/catalog/finance-accounting/paypal-payments/example',
              ],
            },
            {
              type: 'category',
              label: 'PayPal Subscriptions',
              link: { type: 'doc', id: 'connectors/catalog/finance-accounting/paypal-subscriptions/index' },
              items: [
                'connectors/catalog/finance-accounting/paypal-subscriptions/setup-guide',
                'connectors/catalog/finance-accounting/paypal-subscriptions/action-reference',
                'connectors/catalog/finance-accounting/paypal-subscriptions/example',
              ],
            },
            {
              type: 'category',
              label: 'People HR',
              link: { type: 'doc', id: 'connectors/catalog/hrms/peoplehr/index' },
              items: [
                'connectors/catalog/hrms/peoplehr/setup-guide',
                'connectors/catalog/hrms/peoplehr/action-reference',
                'connectors/catalog/hrms/peoplehr/example',
              ],
            },
            {
              type: 'category',
              label: 'Pinecone',
              link: { type: 'doc', id: 'connectors/catalog/ai-ml/ai-pinecone/index' },
              items: [
                'connectors/catalog/ai-ml/ai-pinecone/setup-guide',
                'connectors/catalog/ai-ml/ai-pinecone/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'PostgreSQL',
              link: { type: 'doc', id: 'connectors/catalog/database/postgresql/index' },
              items: [
                'connectors/catalog/database/postgresql/setup-guide',
                'connectors/catalog/database/postgresql/action-reference',
                'connectors/catalog/database/postgresql/trigger-reference',
                'connectors/catalog/database/postgresql/example',
              ],
            },
            {
              type: 'category',
              label: 'RabbitMQ',
              link: { type: 'doc', id: 'connectors/catalog/messaging/rabbitmq/index' },
              items: [
                'connectors/catalog/messaging/rabbitmq/setup-guide',
                'connectors/catalog/messaging/rabbitmq/action-reference',
                'connectors/catalog/messaging/rabbitmq/trigger-reference',
              ],
            },
            {
              type: 'category',
              label: 'Redis',
              link: { type: 'doc', id: 'connectors/catalog/database/redis/index' },
              items: [
                'connectors/catalog/database/redis/setup-guide',
                'connectors/catalog/database/redis/action-reference',
                'connectors/catalog/database/redis/example',
              ],
            },
            {
              type: 'category',
              label: 'SAP',
              link: { type: 'doc', id: 'connectors/catalog/erp-business/sap/index' },
              items: [
                'connectors/catalog/erp-business/sap/setup-guide',
                'connectors/catalog/erp-business/sap/action-reference',
                'connectors/catalog/erp-business/sap/example',
              ],
            },
            {
              type: 'category',
              label: 'SAP Commerce',
              link: { type: 'doc', id: 'connectors/catalog/ecommerce/sap-commerce-webservices/index' },
              items: [
                'connectors/catalog/ecommerce/sap-commerce-webservices/setup-guide',
                'connectors/catalog/ecommerce/sap-commerce-webservices/action-reference',
                'connectors/catalog/ecommerce/sap-commerce-webservices/example',
              ],
            },
            {
              type: 'category',
              label: 'SAP SD Incoterms',
              link: { type: 'doc', id: 'connectors/catalog/erp-business/sap-s4hana-api-sd-incoterms-srv/index' },
              items: [
                'connectors/catalog/erp-business/sap-s4hana-api-sd-incoterms-srv/setup-guide',
                'connectors/catalog/erp-business/sap-s4hana-api-sd-incoterms-srv/action-reference',
                'connectors/catalog/erp-business/sap-s4hana-api-sd-incoterms-srv/example',
              ],
            },
            {
              type: 'category',
              label: 'SAP SD Sold-to-Party Determination',
              link: { type: 'doc', id: 'connectors/catalog/erp-business/sap-s4hana-api-sd-sa-soldtopartydetn/index' },
              items: [
                'connectors/catalog/erp-business/sap-s4hana-api-sd-sa-soldtopartydetn/setup-guide',
                'connectors/catalog/erp-business/sap-s4hana-api-sd-sa-soldtopartydetn/action-reference',
                'connectors/catalog/erp-business/sap-s4hana-api-sd-sa-soldtopartydetn/example',
              ],
            },
            {
              type: 'category',
              label: 'SAP Sales Area',
              link: { type: 'doc', id: 'connectors/catalog/erp-business/sap-s4hana-salesarea-0001/index' },
              items: [
                'connectors/catalog/erp-business/sap-s4hana-salesarea-0001/setup-guide',
                'connectors/catalog/erp-business/sap-s4hana-salesarea-0001/action-reference',
                'connectors/catalog/erp-business/sap-s4hana-salesarea-0001/example',
              ],
            },
            {
              type: 'category',
              label: 'SAP Sales District',
              link: { type: 'doc', id: 'connectors/catalog/erp-business/sap-s4hana-api-salesdistrict-srv/index' },
              items: [
                'connectors/catalog/erp-business/sap-s4hana-api-salesdistrict-srv/setup-guide',
                'connectors/catalog/erp-business/sap-s4hana-api-salesdistrict-srv/action-reference',
                'connectors/catalog/erp-business/sap-s4hana-api-salesdistrict-srv/example',
              ],
            },
            {
              type: 'category',
              label: 'SAP Sales Inquiry',
              link: { type: 'doc', id: 'connectors/catalog/erp-business/sap-s4hana-api-sales-inquiry-srv/index' },
              items: [
                'connectors/catalog/erp-business/sap-s4hana-api-sales-inquiry-srv/setup-guide',
                'connectors/catalog/erp-business/sap-s4hana-api-sales-inquiry-srv/action-reference',
                'connectors/catalog/erp-business/sap-s4hana-api-sales-inquiry-srv/example',
              ],
            },
            {
              type: 'category',
              label: 'SAP Sales Order',
              link: { type: 'doc', id: 'connectors/catalog/erp-business/sap-s4hana-api-sales-order-srv/index' },
              items: [
                'connectors/catalog/erp-business/sap-s4hana-api-sales-order-srv/setup-guide',
                'connectors/catalog/erp-business/sap-s4hana-api-sales-order-srv/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'SAP Sales Order Analytics',
              link: { type: 'doc', id: 'connectors/catalog/erp-business/sap-s4hana-ce-salesorder-0001/index' },
              items: [
                'connectors/catalog/erp-business/sap-s4hana-ce-salesorder-0001/setup-guide',
                'connectors/catalog/erp-business/sap-s4hana-ce-salesorder-0001/action-reference',
                'connectors/catalog/erp-business/sap-s4hana-sales-order-analytics/example',
              ],
            },
            {
              type: 'category',
              label: 'SAP Sales Order Simulation',
              link: { type: 'doc', id: 'connectors/catalog/erp-business/sap-s4hana-api-sales-order-simulation-srv/index' },
              items: [
                'connectors/catalog/erp-business/sap-s4hana-api-sales-order-simulation-srv/setup-guide',
                'connectors/catalog/erp-business/sap-s4hana-api-sales-order-simulation-srv/action-reference',
                'connectors/catalog/erp-business/sap-s4hana-api-sales-order-simulation-srv/example',
              ],
            },
            {
              type: 'category',
              label: 'SAP Sales Organization',
              link: { type: 'doc', id: 'connectors/catalog/erp-business/sap-s4hana-api-salesorganization-srv/index' },
              items: [
                'connectors/catalog/erp-business/sap-s4hana-api-salesorganization-srv/setup-guide',
                'connectors/catalog/erp-business/sap-s4hana-api-salesorganization-srv/action-reference',
                'connectors/catalog/erp-business/sap-s4hana-api-salesorganization-srv/example',
              ],
            },
            {
              type: 'category',
              label: 'SAP Sales Quotation',
              link: { type: 'doc', id: 'connectors/catalog/erp-business/sap-s4hana-api-sales-quotation-srv/index' },
              items: [
                'connectors/catalog/erp-business/sap-s4hana-api-sales-quotation-srv/setup-guide',
                'connectors/catalog/erp-business/sap-s4hana-api-sales-quotation-srv/action-reference',
                'connectors/catalog/erp-business/sap-s4hana-api-sales-quotation-srv/example',
              ],
            },
            {
              type: 'category',
              label: 'SCIM',
              link: { type: 'doc', id: 'connectors/catalog/security-identity/scim/index' },
              items: [
                'connectors/catalog/security-identity/scim/setup-guide',
                'connectors/catalog/security-identity/scim/action-reference',
                'connectors/catalog/security-identity/scim/example',
              ],
            },
            {
              type: 'category',
              label: 'Salesforce',
              link: { type: 'doc', id: 'connectors/catalog/crm-sales/salesforce/index' },
              items: [
                'connectors/catalog/crm-sales/salesforce/setup-guide',
                'connectors/catalog/crm-sales/salesforce/action-reference',
                'connectors/catalog/crm-sales/salesforce/trigger-reference',
              ],
            },
            {
              type: 'category',
              label: 'Salesforce Marketing Cloud',
              link: { type: 'doc', id: 'connectors/catalog/marketing-social/salesforce-marketingcloud/index' },
              items: [
                'connectors/catalog/marketing-social/salesforce-marketingcloud/setup-guide',
                'connectors/catalog/marketing-social/salesforce-marketingcloud/action-reference',
                'connectors/catalog/marketing-social/salesforce-marketingcloud/example',
              ],
            },
            {
              type: 'category',
              label: 'Shopify Admin',
              link: { type: 'doc', id: 'connectors/catalog/ecommerce/shopify-admin/index' },
              items: [
                'connectors/catalog/ecommerce/shopify-admin/setup-guide',
                'connectors/catalog/ecommerce/shopify-admin/action-reference',
                'connectors/catalog/ecommerce/shopify-admin/example',
              ],
            },
            {
              type: 'category',
              label: 'Slack',
              link: { type: 'doc', id: 'connectors/catalog/communication/slack/index' },
              items: [
                'connectors/catalog/communication/slack/setup-guide',
                'connectors/catalog/communication/slack/action-reference',
                'connectors/catalog/communication/slack/example',
              ],
            },
            {
              type: 'category',
              label: 'Smartsheet',
              link: { type: 'doc', id: 'connectors/catalog/productivity-collaboration/smartsheet/index' },
              items: [
                'connectors/catalog/productivity-collaboration/smartsheet/setup-guide',
                'connectors/catalog/productivity-collaboration/smartsheet/action-reference',
                'connectors/catalog/productivity-collaboration/smartsheet/example',
              ],
            },
            {
              type: 'category',
              label: 'Snowflake',
              link: { type: 'doc', id: 'connectors/catalog/database/snowflake/index' },
              items: [
                'connectors/catalog/database/snowflake/setup-guide',
                'connectors/catalog/database/snowflake/action-reference',
                'connectors/catalog/database/snowflake/example',
              ],
            },
            {
              type: 'category',
              label: 'Solace',
              link: { type: 'doc', id: 'connectors/catalog/messaging/solace/index' },
              items: [
                'connectors/catalog/messaging/solace/setup-guide',
                'connectors/catalog/messaging/solace/action-reference',
                'connectors/catalog/messaging/solace/trigger-reference',
              ],
            },
            {
              type: 'category',
              label: 'Stripe',
              link: { type: 'doc', id: 'connectors/catalog/finance-accounting/stripe/index' },
              items: [
                'connectors/catalog/finance-accounting/stripe/setup-guide',
                'connectors/catalog/finance-accounting/stripe/action-reference',
                'connectors/catalog/finance-accounting/stripe/example',
              ],
            },
            {
              type: 'category',
              label: 'TCP',
              link: { type: 'doc', id: 'connectors/catalog/built-in/tcp/index' },
              items: [
                'connectors/catalog/built-in/tcp/action-reference',
                'connectors/catalog/built-in/tcp/trigger-reference',
              ],
            },
            {
              type: 'category',
              label: 'Trello',
              link: { type: 'doc', id: 'connectors/catalog/productivity-collaboration/trello/index' },
              items: [
                'connectors/catalog/productivity-collaboration/trello/setup-guide',
                'connectors/catalog/productivity-collaboration/trello/action-reference',
                'connectors/catalog/productivity-collaboration/trello/example',
              ],
            },
            {
              type: 'category',
              label: 'Twilio',
              link: { type: 'doc', id: 'connectors/catalog/communication/twilio/index' },
              items: [
                'connectors/catalog/communication/twilio/setup-guide',
                'connectors/catalog/communication/twilio/action-reference',
                'connectors/catalog/communication/twilio/index',
                'connectors/catalog/communication/twilio/example',
              ],
            },
            {
              type: 'category',
              label: 'Twitter',
              link: { type: 'doc', id: 'connectors/catalog/marketing-social/twitter/index' },
              items: [
                'connectors/catalog/marketing-social/twitter/setup-guide',
                'connectors/catalog/marketing-social/twitter/action-reference',
                'connectors/catalog/marketing-social/twitter/example',
              ],
            },
            {
              type: 'category',
              label: 'UDP',
              link: { type: 'doc', id: 'connectors/catalog/built-in/udp/index' },
              items: [
                'connectors/catalog/built-in/udp/action-reference',
                'connectors/catalog/built-in/udp/trigger-reference',
              ],
            },
            {
              type: 'category',
              label: 'WSO2 APIM Catalog',
              link: { type: 'doc', id: 'connectors/catalog/developer-tools/wso2-apim-catalog/index' },
              items: [
                'connectors/catalog/developer-tools/wso2-apim-catalog/setup-guide',
                'connectors/catalog/developer-tools/wso2-apim-catalog/action-reference',
                'connectors/catalog/developer-tools/wso2-apim-catalog/example',
              ],
            },
            {
              type: 'category',
              label: 'Weaviate',
              link: { type: 'doc', id: 'connectors/catalog/ai-ml/ai-weaviate/index' },
              items: [
                'connectors/catalog/ai-ml/ai-weaviate/setup-guide',
                'connectors/catalog/ai-ml/ai-weaviate/action-reference',
              ],
            },
            {
              type: 'category',
              label: 'WebSocket',
              link: { type: 'doc', id: 'connectors/catalog/built-in/websocket/index' },
              items: [
                'connectors/catalog/built-in/websocket/action-reference',
                'connectors/catalog/built-in/websocket/trigger-reference',
              ],
            },
            {
              type: 'category',
              label: 'WebSub',
              link: { type: 'doc', id: 'connectors/catalog/built-in/websub/index' },
              items: [
                'connectors/catalog/built-in/websub/setup-guide',
                'connectors/catalog/built-in/websub/action-reference',
                'connectors/catalog/built-in/websub/trigger-reference',
              ],
            },
            {
              type: 'category',
              label: 'Zoom Meetings',
              link: { type: 'doc', id: 'connectors/catalog/communication/zoom-meetings/index' },
              items: [
                'connectors/catalog/communication/zoom-meetings/setup-guide',
                'connectors/catalog/communication/zoom-meetings/action-reference',
                'connectors/catalog/communication/zoom-meetings/example',
              ],
            },
            {
              type: 'category',
              label: 'Zoom Scheduler',
              link: { type: 'doc', id: 'connectors/catalog/communication/zoom-scheduler/index' },
              items: [
                'connectors/catalog/communication/zoom-scheduler/setup-guide',
                'connectors/catalog/communication/zoom-scheduler/action-reference',
                'connectors/catalog/communication/zoom-scheduler/example',
              ],
            },
            {
              type: 'category',
              label: 'gRPC',
              link: { type: 'doc', id: 'connectors/catalog/built-in/grpc/index' },
              items: [
                'connectors/catalog/built-in/grpc/action-reference',
                'connectors/catalog/built-in/grpc/trigger-reference',
              ],
            },
            {
              type: 'category',
              label: 'pgvector',
              link: { type: 'doc', id: 'connectors/catalog/ai-ml/ai-pgvector/index' },
              items: [
                'connectors/catalog/ai-ml/ai-pgvector/setup-guide',
                'connectors/catalog/ai-ml/ai-pgvector/action-reference',
              ],
            },
          ],
        },
      ],
    },
    // ── Build Your Own ──
    {
      type: 'category',
      label: 'Build Your Own',
      link: { type: 'doc', id: 'connectors/build-your-own/index' },
      items: [
        'connectors/build-your-own/create-from-openapi',
        'connectors/build-your-own/custom-development',
      ],
    }
  ],
},

  // ─────────────────────────────────────────────
  // GENAI
  // "How do I build AI agents, RAG, or MCP?"
  // ─────────────────────────────────────────────
  {
    type: 'category',
    label: 'GenAI',
    collapsed: true,
    link: { type: 'doc', id: 'genai/index' },
    items: [
      // Getting Started
      {
        type: 'category',
        label: 'Getting Started',
        items: [
            'genai/getting-started/setup',
            {
        type: 'category',
        label: 'Building Your First AI Integration',
        items: [
                'genai/getting-started/smart-calculator',
        'genai/getting-started/hotel-booking-agent',
              ],
  },
          ],
        },
// Key Concepts
{
  type: 'category',
    label: 'Key Concepts',
      items: [
        'genai/key-concepts/llm',
        'genai/key-concepts/natural-function',
        'genai/key-concepts/ai-agent',
        'genai/key-concepts/tools',
        'genai/key-concepts/agent-memory',
        'genai/key-concepts/mcp',
        'genai/key-concepts/rag',
      ],
        },
// Develop AI Applications
{
  type: 'category',
    label: 'Develop AI Applications',
      items: [
        // Direct LLM Calls
        {
          type: 'category',
          label: 'Direct LLM Calls',
          items: [
            'genai/develop/direct-llm/configuring-providers',
            'genai/develop/direct-llm/constructing-prompts',
            'genai/develop/direct-llm/handling-responses',
          ],
        },
        // Natural Functions
        {
          type: 'category',
          label: 'Natural Functions',
          items: [
            'genai/develop/natural-functions/defining',
            'genai/develop/natural-functions/constructing-prompts',
            'genai/develop/natural-functions/handling-responses',
          ],
        },
        // RAG
        {
          type: 'category',
          label: 'RAG',
          items: [
            {
              type: 'category',
              label: 'RAG Ingestion',
              items: [
                'genai/develop/rag/chunking-documents',
                'genai/develop/rag/generating-embeddings',
                'genai/develop/rag/connect-vector-dbs',
              ],
            },
            'genai/develop/rag/querying',
          ],
        },
        // AI Agents
        {
          type: 'category',
          label: 'AI Agents',
          items: [
            'genai/develop/agents/creating-agent',
            'genai/develop/agents/adding-tools',
            'genai/develop/agents/adding-memory',
            'genai/develop/agents/advanced-config',
            'genai/develop/agents/agent-observability',
            'genai/develop/agents/agent-evaluations',
          ],
        },
        // MCP Integration
        {
          type: 'category',
          label: 'MCP Integration',
          items: [
            'genai/develop/mcp/creating-server',
            'genai/develop/mcp/agents',
          ],
        },
      ],
        },
// Deep Dives — Agents
{
  type: 'category',
    label: 'Agents',
      items: [
        'genai/agents/architecture-concepts',
        'genai/agents/chat',
        'genai/agents/api-exposed',
        'genai/agents/natural-functions',
        'genai/agents/tool-binding',
        'genai/agents/configure-memory',
        'genai/agents/multi-agent-orchestration',
      ],
        },
// Deep Dives — RAG
{
  type: 'category',
    label: 'RAG',
      items: [
        'genai/rag/architecture-overview',
        'genai/rag/document-ingestion',
        'genai/rag/chunking-embedding',
        'genai/rag/vector-databases',
        'genai/rag/build-service',
      ],
        },
// Deep Dives — MCP
{
  type: 'category',
    label: 'MCP',
      items: [
        'genai/mcp/index',
        'genai/mcp/consuming-tools',
        'genai/mcp/exposing',
        'genai/mcp/security',
      ],
        },
// LLM Connectivity
{
  type: 'category',
    label: 'LLM Connectivity',
      items: [
        'genai/llm-connectivity/model-selection',
        'genai/llm-connectivity/prompt-engineering',
        'genai/llm-connectivity/managing-context-windows',
        'genai/llm-connectivity/natural-expressions',
        'genai/llm-connectivity/streaming-responses',
      ],
        },
// Guardrails
{
  type: 'category',
    label: 'Guardrails',
      items: [
        'genai/guardrails/responsible-ai',
        'genai/guardrails/content-filtering',
        'genai/guardrails/input-output',
        'genai/guardrails/token-cost-management',
        'genai/guardrails/ai-usage-guidelines',
      ],
        },
// Agent Observability
{
  type: 'category',
    label: 'Agent Observability',
      items: [
        'genai/agent-observability/agent-tracing',
        'genai/agent-observability/conversation-logging',
        'genai/agent-observability/performance-metrics',
        'genai/agent-observability/debugging-agent-behavior',
      ],
        },
// Quick Starts
{
  type: 'category',
    label: 'Quick Starts',
      items: [
        'genai/quick-starts/build-conversational-agent',
        'genai/quick-starts/build-rag-application',
        'genai/quick-starts/expose-mcp-server',
      ],
        },
// Tutorials
{
  type: 'category',
    label: 'Tutorials',
      items: [
        'genai/tutorials/hr-knowledge-base-rag',
        'genai/tutorials/customer-care-mcp',
        'genai/tutorials/it-helpdesk-chatbot',
        'genai/tutorials/legal-doc-qa',
        'genai/tutorials/ai-customer-support',
        'genai/tutorials/conversational-data-pipeline',
        'genai/tutorials/mcp-enterprise-data',
        'genai/tutorials/multi-agent-workflow',
        'genai/tutorials/rag-knowledge-base',
      ],
        },
// Reference
{
  type: 'category',
    label: 'Reference',
      items: [
        'genai/reference/copilot-guide',
        'genai/reference/ai-governance',
        'genai/reference/troubleshooting',
      ],
        },
      ],
    },

// ─────────────────────────────────────────────
// TUTORIALS
// "Show me a complete, real example"
// ─────────────────────────────────────────────
{
  type: 'category',
    label: 'Tutorials',
      collapsed: true,
        link: { type: 'doc', id: 'tutorials/index' },
  items: [
    // Walkthroughs
    {
      type: 'category',
      label: 'Walkthroughs',
      items: [
        'tutorials/salesforce-db-sync',
        'tutorials/kafka-event-pipeline',
        'tutorials/rest-api-aggregation',
        'tutorials/walkthroughs/content-based-routing',
        'tutorials/walkthroughs/data-transformation-pipeline',
        'tutorials/file-batch-etl',
        'tutorials/walkthroughs/email-notification-service',
        'tutorials/walkthroughs/cdc-service',
        'tutorials/healthcare-hl7-fhir',
        'tutorials/walkthroughs/edi-ftp-processing',
        'tutorials/walkthroughs/csv-ftp-processing',
        'tutorials/walkthroughs/ftp-order-processing',
        'tutorials/walkthroughs/local-file-watcher',
        'tutorials/walkthroughs/streaming-csv-sftp',
        'tutorials/data-reconciliation',
      ],
    },
    // Enterprise Integration Patterns (EIP)
    {
      type: 'category',
      label: 'Enterprise Integration Patterns',
      items: [
        'tutorials/patterns/content-based-router',
        'tutorials/patterns/message-filter',
        'tutorials/patterns/scatter-gather',
        'tutorials/patterns/recipient-list',
        'tutorials/patterns/message-translator',
        'tutorials/patterns/circuit-breaker',
        'tutorials/patterns/saga-compensation',
        'tutorials/patterns/publish-subscribe',
        'tutorials/patterns/guaranteed-delivery',
        'tutorials/patterns/idempotent-receiver',
        'tutorials/patterns/api-gateway-orchestration',
        'tutorials/patterns/agent-tool-orchestration',
        'tutorials/patterns/rag-pipeline',
      ],
    },
    // Pre-Built Integration Samples
    {
      type: 'category',
      label: 'Pre-Built Integration Samples',
      items: [
        'tutorials/pre-built/index',
        'tutorials/pre-built/google-sheets-salesforce',
        'tutorials/pre-built/github-email-summary',
        'tutorials/pre-built/google-drive-onedrive',
        'tutorials/pre-built/mysql-salesforce-products',
        'tutorials/pre-built/gmail-salesforce-leads',
        'tutorials/pre-built/kafka-salesforce-pricebook',
        'tutorials/pre-built/salesforce-twilio-sms',
        'tutorials/pre-built/hubspot-google-contacts',
        'tutorials/pre-built/ftp-edi-salesforce',
        'tutorials/pre-built/shopify-outlook-email',
      ],
    },
    // Sample Projects
    {
      type: 'category',
      label: 'Sample Projects',
      items: [
        'tutorials/samples/index',
        'tutorials/samples/hospital-service',
        'tutorials/samples/ecommerce-order-service',
        'tutorials/samples/event-driven-microservices',
        'tutorials/samples/data-service-persist',
        'tutorials/samples/restful-api-data-mapper',
        'tutorials/samples/ai-personal-assistant',
      ],
    },
    // Migration Guides
    {
      type: 'category',
      label: 'Migration Guides',
      items: [
        'tutorials/migration/from-wso2-mi',
        'tutorials/migration/from-mulesoft',
        'tutorials/migration/from-tibco',
        'tutorials/migration/from-boomi',
      ],
    },
  ],
    },

// ─────────────────────────────────────────────
// DEPLOY & OPERATE
// "How do I ship, run, and secure this?"
// ─────────────────────────────────────────────
{
  type: 'category',
    label: 'Deploy & Operate',
      collapsed: true,
        link: { type: 'doc', id: 'deploy-operate/index' },
  items: [
    // Deploy
    {
      type: 'category',
      label: 'Deploy',
      items: [
        'deploy-operate/deploy/local',
        'deploy-operate/deploy/vm-based',
        'deploy-operate/deploy/docker-kubernetes',
        'deploy-operate/deploy/openshift',
        'deploy-operate/deploy/serverless',
        'deploy-operate/deploy/devant',
        'deploy-operate/deploy/cloud-providers',
        'deploy-operate/deploy/graalvm',
        'deploy-operate/deploy/environments',
        'deploy-operate/deploy/manage-configurations',
        'deploy-operate/deploy/scaling-ha',
      ],
    },
    // CI/CD
    {
      type: 'category',
      label: 'CI/CD',
      items: [
        'deploy-operate/cicd/github-actions',
        'deploy-operate/cicd/jenkins',
        'deploy-operate/cicd/gitlab',
        'deploy-operate/cicd/azure-devops',
      ],
    },
    // Observe
    {
      type: 'category',
      label: 'Observe',
      items: [
        'deploy-operate/observe/index',
        'deploy-operate/observe/logging',
        'deploy-operate/observe/metrics',
        'deploy-operate/observe/tracing',
        'deploy-operate/observe/icp',
        'deploy-operate/observe/devant',
        'deploy-operate/observe/prometheus',
        'deploy-operate/observe/grafana',
        'deploy-operate/observe/jaeger',
        'deploy-operate/observe/zipkin',
        'deploy-operate/observe/datadog',
        'deploy-operate/observe/new-relic',
        'deploy-operate/observe/elastic',
        'deploy-operate/observe/opensearch',
        'deploy-operate/observe/moesif',
        'deploy-operate/observe/custom-metrics',
        'deploy-operate/observe/third-party',
      ],
    },
    // Secure
    {
      type: 'category',
      label: 'Secure',
      items: [
        'deploy-operate/secure/runtime-security',
        'deploy-operate/secure/authentication',
        'deploy-operate/secure/api-security',
        'deploy-operate/secure/secrets-encryption',
        'deploy-operate/secure/ip-whitelisting',
        'deploy-operate/secure/compliance',
      ],
    },
    // Capacity Planning
    {
      type: 'category',
      label: 'Capacity Planning',
      items: [
        'deploy-operate/capacity-planning/index',
        'deploy-operate/capacity-planning/performance-reports',
      ],
    },
  ],
    },

// ─────────────────────────────────────────────
// REFERENCE
// "What's the exact syntax / config / API for Z?"
// ─────────────────────────────────────────────
{
  type: 'category',
    label: 'Reference',
      collapsed: true,
        link: { type: 'doc', id: 'reference/index' },
  items: [
    // Language
    {
      type: 'category',
      label: 'Language',
      items: [
        'reference/language/syntax',
        'reference/language/type-system',
        'reference/language/standard-library',
        'reference/language/query-expressions',
        'reference/language/concurrency',
        'reference/language/error-handling',
        'reference/language/integration-features',
      ],
    },
    // Configuration
    {
      type: 'category',
      label: 'Configuration',
      items: [
        'reference/config/ballerina-toml',
        'reference/config/config',
        'reference/config/cloud-toml',
        'reference/config/dependencies-toml',
        'reference/config/environment-variables',
      ],
    },
    // CLI
    {
      type: 'category',
      label: 'CLI',
      items: [
        'reference/cli/commands',
        'reference/cli/persist',
        'reference/cli/openapi',
        'reference/cli/graphql',
        'reference/cli/grpc',
        'reference/cli/edi',
        'reference/cli/health',
        'reference/cli/update-tool',
        'reference/cli/scan',
      ],
    },
    // APIs
    {
      type: 'category',
      label: 'APIs',
      items: [
        'reference/api/management',
        'reference/api/icp',
        'reference/api/ballerina',
      ],
    },
    'reference/protocols',
    {
      type: 'category',
      label: 'Supported Data Formats',
      link: { type: 'doc', id: 'reference/data-formats/index' },
      items: [
        'reference/data-formats/avro',
        'reference/data-formats/csv',
        'reference/data-formats/edi',
        'reference/data-formats/fhir',
        'reference/data-formats/hl7',
        'reference/data-formats/json',
        'reference/data-formats/protocol-buffers',
        'reference/data-formats/toml',
        'reference/data-formats/xml',
        'reference/data-formats/yaml',
      ],
    },
    'reference/by-example',
    'reference/specifications',
    // Appendix
    {
      type: 'category',
      label: 'Appendix',
      items: [
        'reference/appendix/system-requirements',
        'reference/error-codes',
        'reference/glossary',
        'reference/faq',
        'reference/appendix/troubleshooting',
        'reference/release-notes',
      ],
    },
  ],
    },
  ],
};


export default sidebars;
