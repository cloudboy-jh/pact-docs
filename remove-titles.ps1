$files = @(
    'C:\Users\johns\OneDrive\Desktop\pact-docs\content\docs\getting-started\quickstart.mdx',
    'C:\Users\johns\OneDrive\Desktop\pact-docs\content\docs\getting-started\concepts.mdx',
    'C:\Users\johns\OneDrive\Desktop\pact-docs\content\docs\cli\edit.mdx',
    'C:\Users\johns\OneDrive\Desktop\pact-docs\content\docs\cli\init.mdx',
    'C:\Users\johns\OneDrive\Desktop\pact-docs\content\docs\cli\push.mdx',
    'C:\Users\johns\OneDrive\Desktop\pact-docs\content\docs\cli\reset-nuke.mdx',
    'C:\Users\johns\OneDrive\Desktop\pact-docs\content\docs\cli\secrets.mdx',
    'C:\Users\johns\OneDrive\Desktop\pact-docs\content\docs\cli\sync.mdx',
    'C:\Users\johns\OneDrive\Desktop\pact-docs\content\docs\configuration\cross-os.mdx',
    'C:\Users\johns\OneDrive\Desktop\pact-docs\content\docs\configuration\pact-json.mdx',
    'C:\Users\johns\OneDrive\Desktop\pact-docs\content\docs\configuration\sync-strategies.mdx',
    'C:\Users\johns\OneDrive\Desktop\pact-docs\content\docs\modules\ai.mdx',
    'C:\Users\johns\OneDrive\Desktop\pact-docs\content\docs\modules\editor.mdx',
    'C:\Users\johns\OneDrive\Desktop\pact-docs\content\docs\modules\git.mdx',
    'C:\Users\johns\OneDrive\Desktop\pact-docs\content\docs\modules\overview.mdx',
    'C:\Users\johns\OneDrive\Desktop\pact-docs\content\docs\modules\shell.mdx',
    'C:\Users\johns\OneDrive\Desktop\pact-docs\content\docs\modules\terminal.mdx',
    'C:\Users\johns\OneDrive\Desktop\pact-docs\content\docs\modules\theme.mdx',
    'C:\Users\johns\OneDrive\Desktop\pact-docs\content\docs\modules\tools.mdx',
    'C:\Users\johns\OneDrive\Desktop\pact-docs\content\docs\reference\environment-variables.mdx',
    'C:\Users\johns\OneDrive\Desktop\pact-docs\content\docs\reference\schema.mdx',
    'C:\Users\johns\OneDrive\Desktop\pact-docs\content\docs\development\architecture.mdx',
    'C:\Users\johns\OneDrive\Desktop\pact-docs\content\docs\development\contributing.mdx',
    'C:\Users\johns\OneDrive\Desktop\pact-docs\content\docs\development\web-app.mdx'
)

foreach ($file in $files) {
    if (Test-Path $file) {
        $lines = Get-Content $file
        $frontmatterEnd = -1
        $dashCount = 0
        for ($i = 0; $i -lt $lines.Count; $i++) {
            if ($lines[$i] -eq '---') {
                $dashCount++
                if ($dashCount -eq 2) {
                    $frontmatterEnd = $i
                    break
                }
            }
        }
        
        if ($frontmatterEnd -ge 0 -and $frontmatterEnd + 1 -lt $lines.Count) {
            $nextLine = $lines[$frontmatterEnd + 1]
            if ($nextLine -match '^# ') {
                $newLines = @()
                for ($i = 0; $i -lt $lines.Count; $i++) {
                    if ($i -ne ($frontmatterEnd + 1)) {
                        $newLines += $lines[$i]
                    }
                }
                $newLines | Set-Content $file
                Write-Output "Updated: $file"
            } else {
                Write-Output "Skipped (no title line): $file"
            }
        }
    } else {
        Write-Output "Not found: $file"
    }
}
