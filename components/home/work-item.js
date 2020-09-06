/** @jsx jsx */
import React, { useState } from 'react'
import { jsx } from 'theme-ui'
import { AiOutlineDeploymentUnit } from 'react-icons/ai'
import { motion } from 'framer-motion'
import TooltripTrigger from 'react-popper-tooltip'
import Link from 'next/link'

import Button from '../../elements/button'
import { IntersectionObserver } from '../intersection-observer'
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerFadeInUp,
} from '../../animations'

const modifiers = [
  {
    name: 'offset',
    enabled: true,
    options: {
      offset: [0, 4],
    },
  },
]

const BasicTooltipTrigger = React.memo(
  ({ tooltip, children, hideArrow, ...props }) => (
    <TooltripTrigger
      {...props}
      modifiers={modifiers}
      tooltip={Tooltip(tooltip, hideArrow)}
    >
      {Trigger(children)}
    </TooltripTrigger>
  ),
)

const Tooltip = (tooltip, hideArrow) => ({
  arrowRef,
  tooltipRef,
  getArrowProps,
  getTooltipProps,
  placement,
}) => (
  <motion.div
    animate={{
      left: 14,
      opacity: 1,
    }}
    initial={{
      opacity: 0,
    }}
    {...getTooltipProps({
      ref: tooltipRef,
    })}
    sx={{
      backgroundColor: '#E3E5EF',
      boxShadow: 'medium',
      padding: '6px',
      color: 'text',
      border: '1px solid #C6CBE8',
      borderRadius: 4,
    }}
  >
    {tooltip}
  </motion.div>
)

const Trigger = (children) => ({ triggerRef, getTriggerProps }) => (
  <motion.span
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 1 }}
    sx={{
      variant: 'button.outline',
    }}
    {...getTriggerProps({ ref: triggerRef })}
  >
    {children}
  </motion.span>
)

const WorkItemButton = ({ href, comingSoon, children, ...props }) => {
  if (comingSoon) {
    return (
      <BasicTooltipTrigger tooltip="Coming Soon!">
        {children}
      </BasicTooltipTrigger>
    )
  }

  return (
    <Button href={href} variant="button.outline" passHref>
      {children}
    </Button>
  )
}

export default function WorkItem({ flip, project }) {
  const projectYear = new Date(project.date).getFullYear()

  return (
    <IntersectionObserver options={{ triggerOnce: true }}>
      {({ inView }) => (
        <motion.div
          variants={staggerFadeInUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          sx={{
            display: 'flex',
            flexDirection: ['column', null, !flip ? 'row' : 'row-reverse'],
            alignItems: 'center',
            mb: 7,
          }}
        >
          <div sx={{ flex: '1', maxWidth: ['100%', null, '500px'] }}>
            <motion.img
              variants={!flip ? fadeInLeft : fadeInRight}
              src={project.thumbnail}
              sx={{
                width: '100%',
                display: 'block',
                borderRadius: '32px',
                marginLeft: !flip && 'auto',
                boxShadow: 'large',
              }}
            />
          </div>
          <div sx={{ flex: 1 }}>
            <div
              sx={{ width: ['100%', null, '88%'], marginLeft: !flip && 'auto' }}
            >
              <motion.strong
                variants={fadeInUp}
                sx={{
                  fontSize: 2,
                  color: 'heading',
                  mt: [4, null, 0],
                  display: 'inline-block',
                }}
              >
                {project.title}
              </motion.strong>
              <motion.div
                variants={fadeInUp}
                sx={{ my: 3, display: 'flex', alignItems: 'center', flexWrap: 'wrap', lineHeight: '2rem' }}
              >
                <AiOutlineDeploymentUnit />
                {project.stack.map((item) => (
                  <span sx={{ ml: 2 }} key={item}>
                    {item}
                  </span>
                ))}
                <span sx={{ mx: 2 }}>·</span>
                <span>{projectYear}</span>
                {project.websiteLink && (
                  <>
                    <span sx={{ mx: 2 }}>·</span>
                    <a href={project.websiteLink} target="_blank">
                      {project.websiteLink}
                    </a>
                  </>
                )}
              </motion.div>
              <div>
                <motion.p variants={fadeInUp}>{project.description}</motion.p>
                <motion.div variants={fadeInUp}>
                  <WorkItemButton
                    href={`/projects/${project.slug}`}
                    comingSoon={project.comingSoon}
                  >
                    View Project
                  </WorkItemButton>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </IntersectionObserver>
  )
}
