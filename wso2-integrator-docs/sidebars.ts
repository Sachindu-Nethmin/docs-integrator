import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Get Started',
      link: {type: 'doc', id: 'get-started/index'},
      items: [
        {
          type: 'category',
          label: 'What is WSO2 Integrator?',
          items: [
            'get-started/overview',
            'get-started/why-wso2-integrator',
            'get-started/key-concepts',
          ],
        },
        {
          type: 'category',
          label: 'Set Up',
          items: [
            'get-started/install',
            'get-started/first-project',
            'get-started/understand-the-ide',
          ],
        },
        {
          type: 'category',
          label: 'Quick Starts',
          items: [
            'get-started/quick-start-api',
            'get-started/quick-start-event',
            'get-started/quick-start-file',
            'get-started/quick-start-automation',
            'get-started/quick-start-ai-agent',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Develop',
      link: {type: 'doc', id: 'develop/index'},
      items: [
        {
          type: 'category',
          label: 'Build',
          items: [
            'develop/build/services',
            'develop/build/event-handlers',
            'develop/build/automations',
            'develop/build/file-processing',
            'develop/build/ai-agents',
            'develop/build/rag-applications',
            'develop/build/control-flow',
            'develop/build/error-handling',
            'develop/build/configuration-management',
            'develop/build/ballerina-pro-code',
          ],
        },
        {
          type: 'category',
          label: 'Transform',
          items: [
            'develop/transform/data-mapper',
            'develop/transform/json',
            'develop/transform/xml',
            'develop/transform/csv-flat-file',
            'develop/transform/edi',
            'develop/transform/type-system',
            'develop/transform/expressions-functions',
            'develop/transform/ai-assisted-mapping',
          ],
        },
        {
          type: 'category',
          label: 'Test',
          items: [
            'develop/test/try-it',
            'develop/test/unit-testing',
            'develop/test/mocking',
            'develop/test/ai-test-generation',
            'develop/test/debugging',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Connectors',
      link: {type: 'doc', id: 'connectors/index'},
      items: [
        {
          type: 'category',
          label: 'By Category',
          items: [
            'connectors/saas',
            'connectors/databases',
            'connectors/messaging',
            'connectors/cloud-services',
            'connectors/ai-llms',
            'connectors/protocols',
            'connectors/file-storage',
          ],
        },
        {
          type: 'category',
          label: 'Using Connectors',
          items: [
            'connectors/configuration',
            'connectors/authentication',
            'connectors/error-handling',
          ],
        },
        {
          type: 'category',
          label: 'Build Your Own',
          items: [
            'connectors/custom-development',
            'connectors/ballerina-libraries',
            'connectors/publish-to-central',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Tutorials',
      link: {type: 'doc', id: 'tutorials/index'},
      items: [
        {
          type: 'category',
          label: 'Walkthroughs',
          items: [
            'tutorials/salesforce-db-sync',
            'tutorials/kafka-event-pipeline',
            'tutorials/rest-api-aggregation',
            'tutorials/file-batch-etl',
            'tutorials/ai-customer-support-agent',
            'tutorials/data-reconciliation',
            'tutorials/healthcare-hl7-fhir',
          ],
        },
        {
          type: 'category',
          label: 'Integration Patterns',
          items: [
            'tutorials/patterns/content-based-router',
            'tutorials/patterns/scatter-gather',
            'tutorials/patterns/circuit-breaker',
            'tutorials/patterns/saga-compensation',
            'tutorials/patterns/publish-subscribe',
            'tutorials/patterns/api-gateway-orchestration',
            'tutorials/patterns/rag-pipeline',
            'tutorials/patterns/agent-tool-orchestration',
          ],
        },
        {
          type: 'category',
          label: 'Sample Projects',
          link: {type: 'doc', id: 'tutorials/samples/index'},
          items: [
            'tutorials/samples/hospital-service',
            'tutorials/samples/ecommerce-order-service',
            'tutorials/samples/ai-personal-assistant',
          ],
        },
        {
          type: 'category',
          label: 'Migration',
          items: [
            'tutorials/migration/from-wso2-mi',
            'tutorials/migration/from-mulesoft',
            'tutorials/migration/from-boomi',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Deploy & Operate',
      link: {type: 'doc', id: 'deploy-operate/index'},
      items: [
        {
          type: 'category',
          label: 'Deploy',
          items: [
            'deploy-operate/deploy/local',
            'deploy-operate/deploy/docker-kubernetes',
            'deploy-operate/deploy/devant',
            'deploy-operate/deploy/cloud-providers',
            'deploy-operate/deploy/environments',
            'deploy-operate/deploy/scaling-ha',
          ],
        },
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
        {
          type: 'category',
          label: 'Observe',
          items: [
            'deploy-operate/observe/icp',
            'deploy-operate/observe/logging',
            'deploy-operate/observe/metrics',
            'deploy-operate/observe/tracing',
            'deploy-operate/observe/third-party',
          ],
        },
        {
          type: 'category',
          label: 'Secure',
          items: [
            'deploy-operate/secure/authentication',
            'deploy-operate/secure/api-security',
            'deploy-operate/secure/ip-whitelisting',
            'deploy-operate/secure/secrets-encryption',
            'deploy-operate/secure/compliance',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      link: {type: 'doc', id: 'reference/index'},
      items: [
        {
          type: 'category',
          label: 'Language',
          items: [
            'reference/language/syntax',
            'reference/language/type-system',
            'reference/language/stdlib',
            'reference/language/integration-features',
          ],
        },
        {
          type: 'category',
          label: 'Configuration',
          items: [
            'reference/config/ballerina-toml',
            'reference/config/config-toml',
            'reference/config/cloud-toml',
            'reference/config/environment-variables',
          ],
        },
        {
          type: 'category',
          label: 'CLI & APIs',
          items: [
            'reference/cli/bal-commands',
            'reference/api/management-api',
            'reference/api/icp-api',
          ],
        },
        {
          type: 'category',
          label: 'Appendix',
          items: [
            'reference/error-codes',
            'reference/glossary',
            'reference/faq',
            'reference/release-notes',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
